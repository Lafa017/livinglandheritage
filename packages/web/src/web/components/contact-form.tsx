import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { api } from "../lib/api";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { interest: "Terreno" },
  });

  const sendLead = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await api.leads.$post({ json: data });
      if (!res.ok) throw new Error("No se pudo enviar");
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      reset();
    },
  });

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-md border border-[#8C5A34]/20 bg-[#F1E9DC] px-8 py-12 text-center">
        <CheckCircle2 className="h-10 w-10 text-[#3E4B3A]" />
        <p className="font-display text-xl text-[#241C15]">¡Gracias por escribirnos!</p>
        <p className="text-sm text-[#6B5C4C]">
          Un asesor de Living Land Heritage se pondrá en contacto contigo muy pronto.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-semibold text-[#8C5A34] underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => sendLead.mutate(data))}
      className="space-y-6 rounded-md border border-[#8C5A34]/15 bg-[#F1E9DC] p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#6B5C4C]">
            Nombre completo
          </label>
          <input
            {...register("name", { required: true })}
            className="w-full border-b-2 border-[#8C5A34]/30 bg-transparent py-2 text-[#241C15] outline-none placeholder:text-[#6B5C4C]/60 focus:border-[#C69A4B]"
            placeholder="Tu nombre"
          />
          {errors.name && <p className="mt-1 text-xs text-[#b3413a]">Este campo es requerido</p>}
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#6B5C4C]">
            Teléfono / WhatsApp
          </label>
          <input
            {...register("phone", { required: true })}
            className="w-full border-b-2 border-[#8C5A34]/30 bg-transparent py-2 text-[#241C15] outline-none placeholder:text-[#6B5C4C]/60 focus:border-[#C69A4B]"
            placeholder="Ej. 762 123 4567"
          />
          {errors.phone && <p className="mt-1 text-xs text-[#b3413a]">Este campo es requerido</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#6B5C4C]">
            Correo (opcional)
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full border-b-2 border-[#8C5A34]/30 bg-transparent py-2 text-[#241C15] outline-none placeholder:text-[#6B5C4C]/60 focus:border-[#C69A4B]"
            placeholder="tu@correo.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#6B5C4C]">
            Me interesa
          </label>
          <select
            {...register("interest", { required: true })}
            className="w-full border-b-2 border-[#8C5A34]/30 bg-transparent py-2 text-[#241C15] outline-none focus:border-[#C69A4B]"
          >
            <option>Terreno</option>
            <option>Casa terminada</option>
            <option>Construcción a la medida</option>
            <option>Aún no lo sé, quiero más información</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#6B5C4C]">
          Mensaje (opcional)
        </label>
        <textarea
          {...register("message")}
          rows={3}
          className="w-full border-b-2 border-[#8C5A34]/30 bg-transparent py-2 text-[#241C15] outline-none placeholder:text-[#6B5C4C]/60 focus:border-[#C69A4B]"
          placeholder="Cuéntanos qué estás buscando..."
        />
      </div>

      {sendLead.isError && (
        <p className="text-sm text-[#b3413a]">Ocurrió un error al enviar. Intenta de nuevo.</p>
      )}

      <button
        type="submit"
        disabled={sendLead.isPending}
        className="inline-flex items-center gap-2 bg-[#8C5A34] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#FAF6F0] transition-colors hover:bg-[#C69A4B] disabled:opacity-60"
      >
        {sendLead.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        Enviar mensaje
      </button>
    </form>
  );
}
