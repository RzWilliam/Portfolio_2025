# 🚀 Portfolio Interactif - Style Outer Wilds

Un portfolio innovant utilisant React Flow et Tailwind CSS, inspiré du journal de bord d'Outer Wilds.

## ✨ Fonctionnalités

- **Portfolio interactif** avec navigation par nœuds connectés
- **Design spatial immersif** avec animations et effets visuels
- **Nœuds non-déplaçables** pour une expérience contrôlée
- **Sidebar détaillée** avec informations complètes sur chaque section
- **Responsive design** avec Tailwind CSS
- **TypeScript** pour une robustesse maximale

## 🛠️ Technologies Utilisées

- **React 19** avec TypeScript
- **Vite** pour un développement ultra-rapide
- **React Flow** pour les nœuds interactifs
- **Tailwind CSS** pour un design moderne et responsive
- **ESLint & Prettier** pour la qualité du code

## 🚀 Installation et Lancement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build

# Aperçu de la build
npm run preview

# Vérification du code
npm run lint
```

## 📁 Structure du Projet

```
src/
├── components/
│   └── OuterWildsJournal.tsx    # Portfolio principal avec React Flow
├── App.tsx                      # Point d'entrée simple
├── index.css                    # Configuration Tailwind CSS
└── main.tsx                     # Bootstrap React
```

## 🎮 Fonctionnement du Portfolio

Le portfolio utilise React Flow pour créer une expérience unique où :

- **Nœuds colorés** par catégorie (projets, compétences, expérience, formation, contact)
- **États visuels** : actif, en apprentissage, complété
- **Connexions logiques** entre les différentes sections
- **Sidebar interactive** avec détails approfondis
- **Navigation fluide** avec mini-carte intégrée
- **Nœuds verrouillés** pour une disposition optimisée

### Types de Sections

- 🔴 **Projets** - Réalisations et créations
- 🔵 **Compétences** - Technologies maîtrisées
- � **Expérience** - Parcours professionnel  
- 🟢 **Formation** - Éducation et certifications
- � **Contact** - Informations de contact

## 🎨 Design System (Tailwind)

- **Palette cosmique** : dégradés sombres avec accents colorés
- **Classes personnalisées** dans tailwind.config.js
- **Animations fluides** avec keyframes CSS
- **Glassmorphism** avec backdrop-filter
- **Design responsive** mobile-first

## 📝 Scripts Disponibles

- `npm run dev` - Serveur de développement (http://localhost:5173)
- `npm run build` - Build optimisée pour production
- `npm run preview` - Aperçu de la build de production
- `npm run lint` - Vérification ESLint

## 🌌 Personnalisation

Pour modifier le contenu du portfolio :

1. **Entries** : Modifiez `portfolioEntries` dans `OuterWildsJournal.tsx`
2. **Positions** : Ajustez les coordonnées des nœuds
3. **Connexions** : Personnalisez `initialEdges` pour les liens
4. **Couleurs** : Modifiez les couleurs dans `tailwind.config.js`
5. **Styles** : Utilisez les classes Tailwind pour l'apparence

### Ajouter un nouveau nœud

```typescript
{
  id: '9',
  title: 'Nouveau Projet',
  description: 'Description courte',
  detailedDescription: 'Description détaillée...',
  category: 'project',
  status: 'active',
  technologies: ['React', 'TypeScript'],
  link: 'https://github.com/username/project'
}
```

## 🚀 Déploiement

Le projet est optimisé pour :
- **Vercel** (recommandé)
- **Netlify** 
- **GitHub Pages**
- **Tout hébergeur SPA**

Configuration automatique avec Vite pour optimisation maximale.

## � Configuration Tailwind

Couleurs personnalisées disponibles :
- `space-dark` : #0c0c0c
- `space-purple` : #1a1a2e  
- `space-blue` : #16213e
- `mystery-red` : #ff6b6b
- `discovery-teal` : #4ecdc4
- `tech-blue` : #45b7d1
- `location-green` : #96ceb4
- `character-yellow` : #feca57

## 📄 License

Portfolio créé à des fins éducatives et professionnelles.
Inspiration Outer Wilds © Mobius Digital.

---

**Status** : ✅ Portfolio moderne avec Tailwind CSS et nœuds verrouillés  
**Serveur** : http://localhost:5173/