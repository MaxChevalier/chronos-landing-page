# Déploiement — Chronos Time Travel Agency

## 🚀 Plateforme

**Vercel** (recommandé)

---

## 📋 Prérequis

- Compte GitHub avec le repository `chronos-landing-page`
- Compte Vercel (gratuit)
- Build fonctionnel en local (`npm run build`)

---

## 🔧 Étapes de déploiement

### 1. Préparer le projet

```bash
# Vérifier que le build fonctionne
npm run build

# Vérifier le preview
npm run preview
```

### 2. Déployer sur Vercel

1. Pousser le projet sur GitHub
   ```bash
   git add .
   git commit -m "chore: prepare for deployment"
   git push origin main
   ```

2. Se connecter à [vercel.com](https://vercel.com)

3. Cliquer sur **"Add New Project"**

4. Importer le repository `MaxChevalier/chronos-landing-page`

5. Configurer le projet :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`

6. Cliquer sur **"Deploy"**

7. Récupérer l'URL publique

---

## ⚙️ Variables d'environnement

Si nécessaire, ajouter dans Vercel Dashboard > Settings > Environment Variables :

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | URL de l'API (si applicable) |

---

## ✅ Vérifications post-déploiement

- [ ] Site accessible en ligne
- [ ] Navigation fonctionnelle (Destinations, About, Contact)
- [ ] Responsive mobile / tablette / desktop
- [ ] Images et animations chargées correctement
- [ ] Effets Framer Motion actifs
- [ ] Aucune erreur dans la console
- [ ] Performance Lighthouse > 90

---

## 🔄 Déploiement continu

Vercel déploie automatiquement à chaque push sur `main`.

- **Preview** : Chaque Pull Request génère une URL de preview
- **Production** : Merge sur `main` déclenche le déploiement

---

## 🌍 URL de production

**À renseigner ici** : `https://chronos-landing-page.vercel.app`

---

## 🚨 Rollback

En cas de problème :

1. Aller dans Vercel Dashboard > Deployments
2. Sélectionner un déploiement précédent
3. Cliquer sur **"Promote to Production"**
