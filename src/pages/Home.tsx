"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  AirVent,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Refrigerator,
  Settings2,
  ShieldCheck,
  Waves,
  Zap,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const REALIZATIONS = [
  { src: "/images/avant-apres-01.jpg", alt: "Intervention électroménager 1" },
  { src: "/images/avant-apres-02.jpg", alt: "Intervention électroménager 2" },
  { src: "/images/avant-apres-03.jpg", alt: "Intervention électroménager 3" },
  { src: "/images/avant-apres-04.jpg", alt: "Intervention électroménager 4" },
  { src: "/images/avant-apres-05.jpg", alt: "Intervention électroménager 5" },
];

export default function Home() {
  const services = [
    {
      title: "Climatisation split / cassette",
      icon: <AirVent className="h-8 w-8" />,
      text: "Entretien, réparation et installation de climatiseurs split et cassette. Nettoyage complet, recharge de gaz, et maintenance préventive.",
      points: [
        "Nettoyage complet des unités",
        "Vérification du fonctionnement",
        "Réduction des mauvaises odeurs",
        "Installation soignée",
      ],
    },
    {
      title: "Frigo, congélateur & vitrine",
      icon: <Refrigerator className="h-8 w-8" />,
      text: "Intervention rapide pour les frigos qui ne refroidissent plus ou les congélateurs en panne, tant pour les particuliers que les commerces.",
      points: [
        "Diagnostic panne rapide",
        "Contrôle du refroidissement",
        "Vitrines pour commerces",
        "Limiter les pertes alimentaires",
      ],
    },
    {
      title: "Cuisinières & Fours",
      icon: <Flame className="h-8 w-8" />,
      text: "Réparation, entretien et maintenance pour garantir sécurité et performance d'allumage et de chauffe.",
      points: [
        "Problème d'allumage",
        "Défaut de chauffe",
        "Contrôle de sécurité",
        "Maintenance préventive",
      ],
    },
    {
      title: "Lave-linges",
      icon: <Waves className="h-8 w-8" />,
      text: "Remise en service rapide pour vos problèmes de lavage, vidange ou panne générale de votre machine à laver.",
      points: [
        "Problème de vidange",
        "Panne de tambour",
        "Diagnostic électronique",
        "Travail propre et net",
      ],
    },
    {
      title: "Petits Appareils",
      icon: <Settings2 className="h-8 w-8" />,
      text: "Dépannage de Moulinex, bouilloires et autres petits équipements du quotidien avec sérieux.",
      points: ["Moulinex / Mixeurs", "Bouilloires", "Fers à repasser", "Diagnostic de rentabilité"],
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="gradient-tech relative flex min-h-[90vh] items-center pt-20 text-white" id="hero">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background-1.png"
            alt="Technicien en intervention"
            fill
            priority
            className="object-cover opacity-25 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center gap-2 font-bold uppercase tracking-widest text-secondary">
                <div className="h-px w-8 bg-secondary" />
                <span>Service expert à Douala & Yaoundé</span>
              </div>
              <h1 className="mb-8 text-4xl font-extrabold leading-tight md:text-6xl">
                Entretien, dépannage et installation de vos appareils électroménagers
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-white/80 md:text-xl">
                ETS HARD WORK Techno-Services redonne vie à vos équipements avec un service
                rapide, propre et professionnel.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+237687882290"
                  className="flex items-center justify-center gap-3 rounded-xl bg-accent px-8 py-4 font-bold text-white shadow-xl shadow-accent/20 transition-all hover:bg-accent-hover"
                >
                  <Phone className="h-5 w-5" />
                  <span>Appeler maintenant</span>
                </a>
                <a
                  href="https://wa.me/237687882290"
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/whatsapp-official.svg"
                    alt="WhatsApp"
                    className="h-5 w-5"
                  />
                  <span>Demander via WhatsApp</span>
                </a>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
                {[
                  { icon: <Zap className="h-5 w-5" />, text: "Intervention rapide" },
                  { icon: <ShieldCheck className="h-5 w-5" />, text: "Diagnostic fiable" },
                  { icon: <Clock className="h-5 w-5" />, text: "Travail soigné" },
                  { icon: <CheckCircle2 className="h-5 w-5" />, text: "Prix abordables" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-white/70">
                    <div className="text-accent">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24" id="presentation">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-primary md:text-4xl">
                Votre technicien de confiance pour l'électroménager et la climatisation
              </h2>
              <div className="space-y-6 leading-relaxed text-neutral-text/70">
                <p>
                  Chez ETS HARD WORK Techno-Services, nous mettons notre savoir-faire au
                  service des particuliers, commerces, restaurants et bureaux.
                </p>
                <p>
                  Nous intervenons aussi bien pour un entretien préventif, une réparation
                  urgente qu'une installation complète.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {["Particuliers", "Commerces", "Restaurants", "Bureaux"].map((client) => (
                  <div key={client} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="font-semibold">{client}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/avant-apres-01.jpg"
                  alt="Technicien en intervention"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-2xl bg-accent p-8 text-white shadow-xl md:block">
                <p className="text-lg font-bold">Satisfaction client garantie</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-bg py-24" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
              Nos services d'entretien, dépannage et installation
            </h2>
            <p className="leading-relaxed text-neutral-text/60">
              Chaque intervention est réalisée avec attention, dans le respect des normes de
              sécurité.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-primary/5 bg-white p-8 shadow-lg transition-all hover:border-secondary"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-secondary transition-colors group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-neutral-text/60">{service.text}</p>
                <ul className="mb-8 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs font-medium text-primary">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition-colors hover:text-accent"
                >
                  <span>Demander un diagnostic</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24" id="realisations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Nos réalisations</h2>
            <p className="text-neutral-text/60">
              Exemples d'interventions effectuées avec les images fournies par ETS HARD WORK.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {REALIZATIONS.map((item, index) => (
              <motion.div
                key={item.src}
                {...fadeIn}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl bg-neutral-bg shadow-md"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={1200}
                  className="h-72 w-full object-cover sm:h-64 lg:h-80"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white" id="why-us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Pourquoi choisir ETS HARD WORK ?</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Diagnostic rapide",
                desc: "Nous identifions rapidement la panne pour proposer une solution concrète.",
              },
              {
                title: "Travail propre",
                desc: "Chaque intervention est réalisée avec soin.",
              },
              {
                title: "Intervention rapide",
                desc: "Nous privilégions la réactivité pour minimiser vos interruptions.",
              },
              {
                title: "Prix abordables",
                desc: "Des prestations sérieuses à des tarifs accessibles.",
              },
              {
                title: "Service professionnel",
                desc: "Nous visons un service fiable, utile et durable.",
              },
              {
                title: "Satisfaction garantie",
                desc: "Nous mettons tout en oeuvre pour restaurer vos équipements.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeIn}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-neutral-bg py-24" id="zones">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary">Nos zones d'intervention</h2>
              <p className="mb-10 leading-relaxed text-neutral-text/60">
                ETS HARD WORK Techno-Services intervient principalement dans les villes
                suivantes.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary p-3 text-secondary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Douala</h3>
                    <p className="text-neutral-text/60">Akwa (Rue King Akwa)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary p-3 text-secondary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Yaoundé</h3>
                    <p className="text-neutral-text/60">Damas (Rue Total Ebom)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-primary p-8 text-white lg:p-12">
              <h3 className="mb-6 text-2xl font-bold">Besoin d'un dépannage rapide ?</h3>
              <div className="space-y-6">
                <a
                  href="tel:+237687882290"
                  className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <Phone className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">Téléphone 1</p>
                    <p className="text-xl font-bold">687 882 290</p>
                  </div>
                </a>
                <a
                  href="tel:+237693712884"
                  className="flex items-center gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <Phone className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/40">Téléphone 2</p>
                    <p className="text-xl font-bold">693 712 884</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-bg bg-white py-20" id="seo-text">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-primary/40">
            Dépannage électroménager et climatisation à Douala et Yaoundé
          </h2>
          <p className="text-sm leading-relaxed text-neutral-text/40">
            Si vous recherchez un professionnel pour le dépannage de climatiseur à Douala,
            la réparation de frigo à Yaoundé, l'entretien de congélateur, la maintenance de
            vitrine réfrigérée, la réparation de lave-linge ou l'installation de climatisation
            split et cassette, ETS HARD WORK Techno-Services vous accompagne avec un service
            sérieux et réactif.
          </p>
        </div>
      </section>
    </div>
  );
}
