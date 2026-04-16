# ETS HARD WORK - Next.js App Router

Ce projet a été migré de Vite vers **Next.js (App Router)**.

## Prérequis

- Node.js 20+
- npm

## Lancer en local

1. Installer les dépendances:
   `npm install`
2. Lancer le serveur de dev:
   `npm run dev`
3. Ouvrir [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` : démarrage local Next.js
- `npm run build` : build de production
- `npm run start` : lancer la build
- `npm run lint` : vérification TypeScript (`tsc --noEmit`)

## Structure importante

- `src/app/` : routes Next.js App Router (`/`, `/about`, `/contact`)
- `src/components/` : navbar, footer, bouton WhatsApp flottant
- `public/images/` : assets locaux (logo, hero, réalisations, WhatsApp officiel)
- `src/app/icon.jpg` : favicon généré depuis le logo

## Déploiement Vercel

- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output: par défaut Next.js
- Root Directory: racine de ce projet

Si Vercel garde un ancien cache de build, relancer un déploiement avec cache nettoyé.
