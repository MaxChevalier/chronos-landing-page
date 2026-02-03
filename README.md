# ⏳ Chronos - Time Travel Agency Landing Page

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

**Chronos** est une landing page élégante et immersive pour une agence de voyage dans le temps fictive. Ce projet présente un design luxueux avec des animations fluides et une expérience utilisateur premium.

![Chronos Preview](https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&q=80)

## ✨ Fonctionnalités

- 🎨 **Design Premium** - Interface luxueuse avec une palette or et noir
- 🌟 **Animations Fluides** - Utilisation de Framer Motion pour des transitions élégantes
- 📱 **Responsive Design** - Adapté à tous les écrans (mobile, tablette, desktop)
- 🧭 **Navigation Intuitive** - Navbar avec effet glass morphism au scroll
- 🏛️ **Section Destinations** - Présentation des différentes époques à explorer
- 🎯 **Composants UI** - Bibliothèque complète de composants shadcn/ui

## 🛠️ Stack Technique

### Frontend
| Technologie | Description |
|-------------|-------------|
| **React 18** | Bibliothèque UI avec hooks modernes |
| **TypeScript** | Typage statique pour un code robuste |
| **Vite** | Build tool ultra-rapide |
| **TailwindCSS** | Framework CSS utility-first |
| **Framer Motion** | Bibliothèque d'animations |
| **shadcn/ui** | Composants UI accessibles et personnalisables |
| **React Router** | Gestion du routing côté client |
| **TanStack Query** | Gestion du state serveur |

### Outils de Développement
| Outil | Description |
|-------|-------------|
| **ESLint** | Linting du code |
| **Vitest** | Framework de tests |
| **PostCSS** | Transformations CSS |

## 📁 Structure du Projet

```
chronos-landing-page/
├── public/                  # Fichiers statiques
├── src/
│   ├── assets/             # Images et ressources
│   ├── components/         # Composants React
│   │   ├── ui/            # Composants shadcn/ui
│   │   ├── Navbar.tsx     # Barre de navigation
│   │   ├── Hero.tsx       # Section héro principale
│   │   ├── Destinations.tsx # Grille des destinations
│   │   └── Footer.tsx     # Pied de page
│   ├── hooks/              # Hooks personnalisés
│   ├── lib/                # Utilitaires
│   ├── pages/              # Pages de l'application
│   │   ├── Index.tsx      # Page d'accueil
│   │   └── NotFound.tsx   # Page 404
│   ├── test/               # Tests
│   ├── App.tsx            # Composant racine
│   └── main.tsx           # Point d'entrée
├── tailwind.config.ts      # Configuration Tailwind
├── vite.config.ts          # Configuration Vite
└── package.json            # Dépendances
```

## 🚀 Installation

### Prérequis

- **Node.js** >= 18.x
- **npm**, **yarn** ou **bun**

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/MaxChevalier/chronos-landing-page.git
   cd chronos-landing-page
   ```

2. **Installer les dépendances**
   ```bash
   # Avec npm
   npm install

   # Avec yarn
   yarn install

   # Avec bun
   bun install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production |
| `npm run build:dev` | Build en mode développement |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Analyse le code avec ESLint |
| `npm run test` | Exécute les tests une fois |
| `npm run test:watch` | Exécute les tests en mode watch |

## 🎨 Personnalisation

### Thème

Le thème est configuré dans `tailwind.config.ts` avec des couleurs personnalisées :

- **Gold** - Couleur d'accent principale (#D4AF37)
- **Obsidian** - Couleur de fond sombre
- **Typographie** - Playfair Display (serif) + Inter (sans-serif)

### Composants UI

Le projet utilise **shadcn/ui** avec plus de 50 composants disponibles dans `src/components/ui/`. Pour ajouter de nouveaux composants :

```bash
npx shadcn@latest add [component-name]
```

## 🧪 Tests

Le projet utilise **Vitest** et **Testing Library** pour les tests :

```bash
# Exécuter tous les tests
npm run test

# Mode watch
npm run test:watch
```

## 📦 Build Production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

Les fichiers de production seront générés dans le dossier `dist/`.

## 🌐 Déploiement

Le projet peut être déployé sur :

- **Vercel** - `vercel deploy`
- **Netlify** - Configuration automatique avec `netlify.toml`
- **GitHub Pages** - Via GitHub Actions
- **Tout hébergeur statique** - Servir le dossier `dist/`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add: AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur
- RAYNAUD Adrien
- PIAUGER Paul
- CHEVALIER Maxime
- CHABOISSIER Luca

---

<p align="center">
  <i>« Le temps est la chose la plus précieuse qu'un homme puisse dépenser. »</i><br>
  <small>— Théophraste</small>
</p>
