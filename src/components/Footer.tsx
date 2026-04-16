import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Twitter } from "lucide-react";

const QUICK_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pb-10 pt-20 text-white" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-lg border border-white/20 bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo ETS HARD WORK"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-none">HARD WORK</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Techno-Services
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Entretien, dépannage et installation d&apos;appareils électroménagers et de
              climatisation à Douala et Yaoundé.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-secondary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-secondary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-secondary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 hidden text-lg font-bold md:visible lg:visible">Navigation</h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Services</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li>Climatisation Split / Cassette</li>
              <li>Frigo et Congélateur</li>
              <li>Vitrines réfrigérées</li>
              <li>Cuisinières et Fours</li>
              <li>Lave-linges & Petit Électro</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:+237687882290"
                    className="text-sm transition-colors hover:text-accent"
                  >
                    687 882 290
                  </a>
                  <a
                    href="tel:+237693712884"
                    className="text-sm transition-colors hover:text-accent"
                  >
                    693 712 884
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm leading-relaxed text-white/60">
                <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-white">Douala :</span> Akwa (Rue King Akwa)
                  </p>
                  <p>
                    <span className="font-medium text-white">Yaoundé :</span> Damas (Rue Total Ebom)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:space-y-0">
          <p>© {currentYear} ETS HARD WORK Techno-Services. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="#" className="transition-colors hover:text-white">
              Mentions Légales
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
