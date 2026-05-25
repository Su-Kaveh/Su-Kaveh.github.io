# Portfolio Kaveh OSTAD — BTS SIO SLAM

## ✨ Étape 1 — Page d'accueil personnalisée

Cette version contient :
- ✅ Architecture multi-pages avec navbar fixe + toggle jour/nuit
- ✅ **Page d'accueil** complète et personnalisée avec vos vraies infos
- ✅ **Photo de profil** intégrée (extraite du CV)
- ✅ **Certificat ANSSI** affiché en image (les 4 modules à 100%)
- ✅ **CV PDF** intégré (consultation + téléchargement)
- ✅ Timeline complète : BTS MCO → Besson Chaussures → BTS SIO → 2 stages DISP → Bac+3 Data
- ✅ Orientation **Data Analyst** mise en avant (badge "Recherche alternance Bac+3 Data")
- ✅ Curseur custom, animations, mode jour/nuit, responsive mobile

## 📁 Structure des fichiers

```
portfolio_kaveh/
├── index.html              ← Page d'accueil
├── README.md
├── assets/
│   ├── css/style.css       ← CSS principal (mode jour/nuit)
│   ├── js/main.js          ← JS commun (curseur, anims, thème)
│   ├── images/
│   │   └── photo-profil.jpg   ← Votre photo
│   ├── certifications/
│   │   └── anssi.jpg          ← Certificat ANSSI (intégré)
│   └── docs/
│       └── cv.pdf             ← Votre CV
```

## 🚀 Tester en local avec VS Code

1. Ouvrir le dossier `portfolio_kaveh` dans VS Code
2. Installer l'extension **Live Server** (Ritwick Dey) si ce n'est pas fait
3. Cliquer sur **"Go Live"** en bas à droite
4. Le portfolio s'ouvre dans le navigateur

## 📸 Encore à ajouter (optionnel, plus tard)

- **Certificat PIX** (capture d'écran ou PDF→JPG) → `assets/certifications/pix.jpg`
  - Puis dans `index.html` remplacer le placeholder PIX par : `<img src="assets/certifications/pix.jpg" alt="Certificat PIX">`

## 🔜 Prochaines étapes

- [ ] **Étape 2** : Page **E5** (vue d'ensemble + sous-pages formation/entreprise avec accordéons C1-C18)
- [ ] **Étape 3** : Page **E6** (Promex client lourd + client léger)
- [ ] **Étape 4** : Page **Veille** (Low-Code / No-Code)
- [ ] **Étape 5** : Page **Projets** (Analyse Flux Aéroportuaire, WebStock, etc.)
- [ ] **Étape 6** : Page **Contact**
- [ ] **Étape 7** : Mise en ligne sur **GitHub Pages** + SEO

## 🎨 Personnalisation rapide des couleurs

Toutes les couleurs sont dans `assets/css/style.css` au début, sous `:root` (sombre) et `[data-theme="light"]` (clair).
