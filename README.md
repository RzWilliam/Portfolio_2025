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
│   ├── sections/                 # 🏝️ Composants d'îlots (sections modulaires)
│   │   ├── ReactFlowCanvas.tsx    # Canvas React Flow avec minimap
│   │   ├── Sidebar.tsx            # Panneau latéral d'informations
│   │   └── SidebarToggleButton.tsx # Bouton de toggle sidebar
│   ├── CustomPortfolioNode.tsx    # Nœud custom pour React Flow
│   ├── CustomPortfolioEdge.tsx    # Edge custom (si nécessaire)
│   ├── Header.tsx                 # En-tête (si utilisé)
│   └── OuterWildsJournal.tsx      # Composant principal orchestrateur
├── data/
│   ├── portfolioData.ts          # 📊 Données des entrées portfolio
│   └── graphConfig.ts            # ⚙️ Configuration du graphe (positions, edges)
├── App.tsx                       # Point d'entrée simple
├── index.css                     # Configuration Tailwind CSS
└── main.tsx                      # Bootstrap React
```

## ➕ Comment Ajouter un Nouveau Bloc (Nœud)

### Étape 1 : Ajouter les Données

Ouvrez `src/data/portfolioData.ts` et ajoutez une nouvelle entrée :

```typescript
{
  id: '9',  // ⚠️ ID unique
  title: 'Mon Nouveau Projet',
  description: 'Description courte',
  detailedDescription: 'Description complète pour la sidebar...',
  category: 'project',  // 'project' | 'skill' | 'experience' | 'education' | 'contact'
  status: 'active',     // 'active' | 'learning' | 'completed'
  technologies: ['React', 'Node.js'],  // Optionnel
  link: 'https://github.com/...'       // Optionnel
}
```

**Catégories disponibles :**
- `project` 🔴 - ÎLOT ROUGE (projets) - Zone Sud-Est
- `skill` 🔵 - ÎLOT BLEU (compétences) - Zone Nord-Est
- `experience` 🟣 - ÎLOT VIOLET (expérience) - Centre
- `education` 🟢 - ÎLOT VERT (éducation) - Zone Ouest
- `contact` 🟡 - ÎLOT JAUNE (contact) - Zone Sud

### Étape 2 : Ajouter des Connexions (Optionnel)

Ouvrez `src/data/graphConfig.ts` et ajoutez des connexions :

```typescript
{
  id: 'e1-9',              // ID unique de l'edge
  source: '1',             // Nœud source
  target: '9',             // Votre nouveau nœud
  sourceHandle: 'right-source',
  targetHandle: 'left-target',
  type: 'smoothstep',
  style: { stroke: '#ef4444', strokeWidth: 2 },
  animated: true,
  label: 'Connexion'
}
```

### Étape 3 : Tester

```bash
npm run dev
```

Le nouveau nœud apparaîtra automatiquement ! 🎉

## 🎨 Architecture en Îlots

Le portfolio est organisé en **composants modulaires (îlots)** pour :
- ✅ Faciliter la maintenance
- ✅ Réutiliser les composants
- ✅ Séparer les responsabilités
- ✅ Améliorer la lisibilité

### Les Composants Principaux

1. **ReactFlowCanvas** - Affiche le graphe interactif
2. **Sidebar** - Affiche les détails d'une entrée
3. **SidebarToggleButton** - Bouton pour ouvrir/fermer la sidebar
4. **OuterWildsJournal** - Orchestre tous les composants

### Les Données

1. **portfolioData.ts** - Contient toutes les entrées du portfolio
2. **graphConfig.ts** - Configure les positions et connexions des nœuds

## 📝 Bonnes Pratiques

✅ Utilisez des IDs uniques pour chaque entrée  
✅ Testez chaque ajout dans le serveur de dev  
✅ Gardez les descriptions concises pour les cartes  
✅ Connectez logiquement les nœuds (skill → project, etc.)  

❌ N'utilisez pas le même ID deux fois  
❌ N'oubliez pas d'ajouter les edges pour connecter les nœuds

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

---
**Serveur** : http://localhost:5173/