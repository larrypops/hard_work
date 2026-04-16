"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      <section className="gradient-tech py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">Contactez ETS HARD WORK</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">
              Vous avez un appareil en panne, besoin d'un entretien ou d'une installation ?
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-24" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-5">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">Nos coordonnées</h2>
                <p className="mb-10 leading-relaxed text-neutral-text/60">
                  Contactez-nous dès maintenant pour une prise en charge rapide à Douala et
                  Yaoundé.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-bg text-accent">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-text/40">
                        Téléphones
                      </p>
                      <div className="flex flex-col space-y-1">
                        <a
                          href="tel:+237687882290"
                          className="text-xl font-bold tracking-tight text-primary transition-colors hover:text-accent"
                        >
                          687 882 290
                        </a>
                        <a
                          href="tel:+237693712884"
                          className="text-xl font-bold tracking-tight text-primary transition-colors hover:text-accent"
                        >
                          693 712 884
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-bg text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-text/40">
                        Villes d'intervention
                      </p>
                      <div className="space-y-4">
                        <div>
                          <p className="font-bold text-primary">Douala</p>
                          <p className="text-sm text-neutral-text/60">Akwa (Rue King Akwa)</p>
                        </div>
                        <div>
                          <p className="font-bold text-primary">Yaoundé</p>
                          <p className="text-sm text-neutral-text/60">Damas (Rue Total Ebom)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-bg text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-text/40">
                        Disponibilité
                      </p>
                      <p className="font-medium text-neutral-text/60">Interventions du Lundi au Samedi</p>
                      <p className="mt-1 text-xs italic text-neutral-text/40">
                        Nous restons disponibles pour revoir vos demandes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 rounded-3xl bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold">Contact rapide WhatsApp</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Pour une réponse directe, envoyez une photo de l'appareil et la description
                  de la panne.
                </p>
                <a
                  href="https://wa.me/237687882290"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent py-4 font-bold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/whatsapp-official.svg"
                    alt="Logo officiel WhatsApp"
                    className="h-6 w-6"
                  />
                  <span>Écrire sur WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-neutral-bg p-8 lg:col-span-7 lg:p-12">
              <div className="mb-10">
                <h2 className="mb-4 text-3xl font-bold text-primary">Demandez une intervention</h2>
                <p className="text-sm leading-relaxed text-neutral-text/60">
                  Décrivez votre panne ou besoin avec précision.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">
                      Nom complet
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-sm font-medium outline-none transition-all focus:border-secondary"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">
                      Téléphone
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-sm font-medium outline-none transition-all focus:border-secondary"
                      placeholder="6xx xxx xxx"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">
                      Ville
                    </label>
                    <select className="w-full appearance-none rounded-xl border border-transparent bg-white px-5 py-4 text-sm font-medium outline-none transition-all focus:border-secondary">
                      <option>Douala</option>
                      <option>Yaoundé</option>
                      <option>Autre (à préciser)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">
                      Quartier
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-sm font-medium outline-none transition-all focus:border-secondary"
                      placeholder="Ex: Akwa, Damas..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">
                    Type d'appareil
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-transparent bg-white px-5 py-4 text-sm font-medium outline-none transition-all focus:border-secondary"
                    placeholder="Ex: Frigo LG, Climatiseur Split..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">
                    Problème rencontré
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-transparent bg-white px-5 py-4 text-sm font-medium outline-none transition-all focus:border-secondary"
                    placeholder="Décrivez ici ce qui ne va pas..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-5 font-bold text-white transition-all hover:bg-secondary disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Envoyer ma demande</span>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 p-4 text-green-700"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        Votre demande a été envoyée avec succès ! Nous vous recontacterons
                        rapidement.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-bg py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Un service sérieux pour vos appareils</h2>
            <p className="text-lg leading-relaxed text-neutral-text/60">
              Chaque demande est traitée avec attention. Que ce soit pour une réparation,
              un entretien ou une installation, nous proposons un service fiable, propre et
              rapide.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
