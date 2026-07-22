import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "7621076124"; // TODO: reemplazar con el número real
const MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer más sobre los terrenos y casas de Living Land Heritage en Taxco."
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#8C5A34] text-[#FAF6F0] shadow-xl shadow-black/20 transition-transform hover:scale-110 hover:bg-[#C69A4B]"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}
