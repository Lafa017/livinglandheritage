import { useEffect, useState } from "react";
import {
  Facebook,
  Home as HomeIcon,
  Mountain,
  Sparkles,
  Landmark,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Reveal } from "../components/reveal";
import { WhatsAppButton } from "../components/whatsapp-button";
import { ContactForm } from "../components/contact-form";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#propiedades", label: "Propiedades" },
  { href: "#construccion", label: "Construcción" },
  { href: "#taxco", label: "Por qué Taxco" },
  { href: "#contacto", label: "Contacto" },
];

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=livinglandheritage";
const WHATSAPP_NUMBER = "527621234567"; // TODO: reemplazar con el número real

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-[#FAF6F0]/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="font-display text-lg tracking-wide">
          <span className={scrolled ? "text-[#241C15]" : "text-[#FAF6F0]"}>Living Land</span>{" "}
          <span className="text-[#C69A4B]">Heritage</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#C69A4B] ${
                scrolled ? "text-[#241C15]" : "text-[#FAF6F0]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="border border-current px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#C69A4B] transition-colors hover:bg-[#C69A4B] hover:text-[#241C15]"
          >
            Agenda una visita
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? "text-[#241C15]" : "text-[#FAF6F0]"}`}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 bg-[#FAF6F0] px-6 pb-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[#8C5A34]/10 py-3 text-sm font-medium uppercase tracking-wider text-[#241C15]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-taxco_1783378357812.png"
          alt="Vista panorámica de Taxco, Guerrero al atardecer"
          className="h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C140C]/85 via-[#1C140C]/40 to-[#1C140C]/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C69A4B]">
            <span className="h-px w-8 bg-[#C69A4B]" /> Taxco, Guerrero
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-[#FAF6F0] sm:text-5xl lg:text-6xl">
            Hay decisiones que cambian tu vida…
            <br />
            <span className="italic text-[#C69A4B]">y una de ellas es elegir dónde construir tu futuro.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 max-w-xl text-base text-[#FAF6F0]/85 sm:text-lg">
            En Living Land Heritage no solo vendemos terrenos y casas… creamos hogares,
            construimos legado, en el corazón de Taxco.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#propiedades"
              className="bg-[#8C5A34] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#FAF6F0] transition-colors hover:bg-[#C69A4B] hover:text-[#241C15]"
            >
              Ver propiedades
            </a>
            <a
              href="#contacto"
              className="border border-[#FAF6F0]/60 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#FAF6F0] transition-colors hover:border-[#C69A4B] hover:text-[#C69A4B]"
            >
              Agenda una visita
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src="/casa-terminada_1783378357813.png"
              alt="Casa terminada estilo colonial en Taxco"
              className="w-full rounded-md object-cover shadow-xl shadow-black/10"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 items-center justify-center rounded-md bg-[#8C5A34] p-6 text-center font-display text-sm leading-tight text-[#FAF6F0] sm:flex">
              Legado que se construye, no se improvisa
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8C5A34]">
            Nuestra filosofía
          </p>
          <h2 className="font-display text-3xl leading-tight text-[#241C15] sm:text-4xl">
            No solo vendemos casas… creamos hogares, construimos legado.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#6B5C4C]">
            Living Land Heritage nace en Taxco, Guerrero, con una convicción simple: la tierra
            que eliges hoy define el futuro de tu familia. Acompañamos a cada cliente desde la
            elección del terreno hasta la última puerta instalada, cuidando cada decisión como si
            fuera nuestra.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#6B5C4C]">
            Creemos en construir con raíces: aprovechando la belleza natural de Taxco, su clima,
            su cultura y su plusvalía, para entregar patrimonio real — no solo una propiedad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const PROPERTIES = [
  {
    image: "/terreno-1_1783378357812.png",
    title: "Terrenos con vista",
    desc: "Lotes seleccionados en las mejores zonas de Taxco, listos para construir tu proyecto desde cero.",
  },
  {
    image: "/casa-construccion_1783378357813.png",
    title: "Construcción a la medida",
    desc: "Diseñamos y construimos tu casa con acabados de calidad, acompañados por nuestro equipo aliado.",
  },
  {
    image: "/casa-terminada_1783378357813.png",
    title: "Casas terminadas",
    desc: "Propiedades listas para habitar, con estilo colonial mexicano y vista a la montaña.",
  },
];

function Properties() {
  return (
    <section id="propiedades" className="bg-[#F1E9DC] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8C5A34]">
            Propiedades
          </p>
          <h2 className="font-display text-3xl leading-tight text-[#241C15] sm:text-4xl">
            Terrenos y casas pensados para durar generaciones
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PROPERTIES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <div className="group overflow-hidden rounded-md bg-[#FAF6F0] shadow-sm shadow-black/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[#241C15]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B5C4C]">{p.desc}</p>
                  <a
                    href="#contacto"
                    className="mt-4 inline-block text-sm font-semibold uppercase tracking-wider text-[#8C5A34] underline underline-offset-4 hover:text-[#C69A4B]"
                  >
                    Pedir información
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Construction() {
  return (
    <section id="construccion" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal delay={0.1} className="order-2 lg:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8C5A34]">
            Alianza de construcción
          </p>
          <h2 className="font-display text-3xl leading-tight text-[#241C15] sm:text-4xl">
            Tu terreno, diseñado y construido por expertos
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#6B5C4C]">
            Trabajamos junto a <strong className="text-[#241C15]">ConstruVision</strong>, estudio
            de construcción y diseño arquitectónico, para convertir tu terreno en la casa que
            imaginas. Un servicio integral: terreno, diseño y construcción, todo en un solo lugar.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Diseño arquitectónico personalizado",
              "Construcción integral con seguimiento cercano",
              "Materiales y acabados de calidad",
              "Acompañamiento desde el plano hasta la entrega",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#241C15]">
                <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C69A4B]" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <img
            src="/equipo-construccion_1783378357813.png"
            alt="Equipo de arquitectura y construcción revisando planos en Taxco"
            className="w-full rounded-md object-cover shadow-xl shadow-black/10"
          />
        </Reveal>
      </div>
    </section>
  );
}

const REASONS = [
  { icon: Mountain, title: "Clima y paisaje únicos", desc: "Montañas, clima templado todo el año y vistas que no encuentras en la ciudad." },
  { icon: Landmark, title: "Cultura y patrimonio", desc: "Taxco es Pueblo Mágico, cuna de la plata y de una tradición viva." },
  { icon: MapPin, title: "Cerca de todo", desc: "A poco más de 2 horas de Ciudad de México, ideal para vivir o invertir." },
  { icon: HomeIcon, title: "Plusvalía en crecimiento", desc: "Zona con creciente interés turístico e inmobiliario." },
];

function WhyTaxco() {
  return (
    <section id="taxco" className="bg-[#3E4B3A] px-6 py-24 text-[#FAF6F0] lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C69A4B]">
            Por qué Taxco
          </p>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Un lugar donde vivir se siente como pertenecer
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="border-t border-[#C69A4B]/30 pt-6">
                <r.icon className="h-7 w-7 text-[#C69A4B]" />
                <h3 className="mt-4 font-display text-lg">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FAF6F0]/75">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-md bg-[#F1E9DC] px-8 py-14 text-center">
          <Facebook className="h-9 w-9 text-[#8C5A34]" />
          <h2 className="font-display text-2xl text-[#241C15] sm:text-3xl">
            Síguenos y forma parte de nuestra comunidad
          </h2>
          <p className="max-w-xl text-sm text-[#6B5C4C]">
            Compartimos avances de construcción, nuevos terrenos disponibles y todo lo que
            necesitas saber antes de construir tu legado en Taxco.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#8C5A34] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-[#FAF6F0] transition-colors hover:bg-[#C69A4B] hover:text-[#241C15]"
          >
            Seguir en Facebook
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-[#F1E9DC]/40 px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8C5A34]">
            Contacto
          </p>
          <h2 className="font-display text-3xl leading-tight text-[#241C15] sm:text-4xl">
            Empecemos a construir tu futuro
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#6B5C4C]">
            Cuéntanos qué estás buscando y un asesor de Living Land Heritage te contactará para
            agendar una visita a Taxco.
          </p>

          <div className="mt-10 space-y-4 text-sm text-[#241C15]">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-[#8C5A34]"
            >
              <Phone className="h-4 w-4 text-[#8C5A34]" /> +52 762 123 4567
            </a>
            <a href="mailto:contacto@livinglandheritage.com" className="flex items-center gap-3 hover:text-[#8C5A34]">
              <Mail className="h-4 w-4 text-[#8C5A34]" /> contacto@livinglandheritage.com
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#8C5A34]" /> Taxco de Alarcón, Guerrero, México
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#8C5A34]/15 bg-[#241C15] px-6 py-10 text-[#FAF6F0]/70 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-display text-base text-[#FAF6F0]">
          Living Land <span className="text-[#C69A4B]">Heritage</span>
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} Living Land Heritage · Taxco, Guerrero · Todos los derechos reservados
        </p>
        <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:text-[#C69A4B]">
          <Facebook className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="font-body">
      <Nav />
      <Hero />
      <About />
      <Properties />
      <Construction />
      <WhyTaxco />
      <Community />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
