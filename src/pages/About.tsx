"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Handshake,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  const values = [
    {
      title: "Professionnalisme",
      icon: <ShieldCheck className="h-6 w-6" />,
      text: "Nous intervenons avec rigueur, méthode et sérieux.",
    },
    {
      title: "Réactivité",
      icon: <Zap className="h-6 w-6" />,
      text: "Nous comprenons l'urgence de certaines pannes.",
    },
    {
      title: "Travail propre",
      icon: <Sparkles className="h-6 w-6" />,
      text: "Un service soigné pendant et après l'intervention.",
    },
    {
      title: "Honnêteté",
      icon: <Handshake className="h-6 w-6" />,
      text: "Des solutions claires et adaptées aux besoins réels.",
    },
    {
      title: "Satisfaction client",
      icon: <CheckCircle2 className="h-6 w-6" />,
      text: "Votre satisfaction reste notre priorité absolue.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="gradient-tech py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">À propos de ETS HARD WORK</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              Expertise technique et engagement au service de votre confort à Douala et
              Yaoundé.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <h2 className="mb-8 text-3xl font-bold text-primary">Service technique de confiance</h2>
              <div className="space-y-6 leading-relaxed text-neutral-text/70">
                <p>
                  ETS HARD WORK Techno-Services est spécialisée dans l'entretien, le dépannage
                  et l'installation d'appareils électroménagers et d'équipements de
                  climatisation.
                </p>
                <p>
                  Notre activité repose sur des valeurs simples : professionnalisme, rapidité,
                  propreté, accessibilité et satisfaction client.
                </p>
                <p>
                  Nous nous engageons à fournir un service utile, clair et efficace pour
                  particuliers et professionnels.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:pl-10"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/images/avant-apres-02.jpg"
                  alt="Outils et intervention technique"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -left-6 top-10 max-w-[180px] rounded-2xl bg-accent p-6 font-bold text-white shadow-xl">
                Plus de 5 ans d'expertise technique
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-bg py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div {...fadeIn} className="rounded-3xl bg-white p-12 shadow-lg">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-primary">Notre mission</h3>
              <p className="leading-relaxed text-neutral-text/70">
                Redonner vie à vos appareils électroménagers avec des prestations fiables,
                abordables et durables.
              </p>
            </motion.div>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="rounded-3xl bg-white p-12 shadow-lg"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-primary">Notre vision</h3>
              <p className="leading-relaxed text-neutral-text/70">
                Devenir une référence locale de confiance pour la maintenance et le dépannage à
                Douala et Yaoundé.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-primary">Nos valeurs</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl bg-neutral-bg p-8 text-center transition-all hover:bg-primary hover:text-white"
              >
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-white">
                  {value.icon}
                </div>
                <h4 className="mb-3 font-bold">{value.title}</h4>
                <p className="text-xs leading-relaxed text-neutral-text/60 group-hover:text-white/60">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Nos domaines d'intervention</h2>
              <p className="leading-relaxed text-white/60">
                Nous intervenons sur climatiseurs, frigos, congélateurs, vitrines, cuisinières,
                lave-linges et petits appareils.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Climatisation",
                  "Frigos",
                  "Congélateurs",
                  "Vitrines",
                  "Cuisinières",
                  "Lave-linges",
                  "Moulinex",
                  "Bouilloires",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-8">
                <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                  Expertise technique
                </p>
                <p className="text-lg italic">Entretien • Dépannage • Réparation • Installation</p>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-12 text-primary shadow-2xl">
              <h3 className="mb-6 text-2xl font-bold">Pourquoi nous faire confiance ?</h3>
              <p className="mb-8 leading-relaxed text-neutral-text/70">
                Nous cherchons toujours la cause réelle du problème pour proposer la meilleure
                solution, avec transparence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 font-bold text-white transition-all hover:bg-accent-hover"
              >
                <span>Nous contacter</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
