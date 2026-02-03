# Déploiement — Chronos Time Travel Agency

## 🚀 Plateforme

**GitHub Pages** (gratuit)

---

## 📋 Prérequis

- Compte GitHub avec le repository `chronos-landing-page`
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

### 2. Configurer GitHub Pages

1. Pousser le projet sur GitHub
   ```bash
   git add .
   git commit -m "chore: configure GitHub Pages deployment"
   git push origin main
   ```

2. Aller sur le repository GitHub : `github.com/MaxChevalier/chronos-landing-page`

3. Cliquer sur **Settings** > **Pages**

4. Dans **Source**, sélectionner **GitHub Actions**

5. Le workflow se lancera automatiquement à chaque push sur `main`

6. Attendre que le build soit terminé (voir onglet **Actions**)

7. Récupérer l'URL publique

---

## ⚙️ Configuration technique

Le projet est configuré pour GitHub Pages :

| Fichier | Configuration |
|---------|---------------|
| `vite.config.ts` | `base: "/chronos-landing-page/"` en production |
| `.github/workflows/deploy.yml` | Workflow GitHub Actions |

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

GitHub Pages déploie automatiquement à chaque push sur `main`.

- **Workflow** : `.github/workflows/deploy.yml`
- **Build** : `npm run build`
- **Output** : `dist/`

---

## 🌍 URL de production

**URL** : `https://maxchevalier.github.io/chronos-landing-page/`

---

## 🚨 Rollback

En cas de problème :

1. Aller dans l'onglet **Actions** du repository
2. Sélectionner le workflow **Deploy to GitHub Pages**
3. Cliquer sur **Run workflow** avec un commit précédent

Ou revenir à un commit antérieur :

```bash
git revert HEAD
git push origin main
```

---

## 🔧 Dépannage

### Le site affiche une page blanche

Vérifier que `base` est correctement configuré dans `vite.config.ts` :
```typescript
base: "/chronos-landing-page/"
```

### Les images ne s'affichent pas

S'assurer que les chemins d'images utilisent des imports ou commencent par le bon chemin de base.

### Le workflow échoue

1. Vérifier l'onglet **Actions** pour les logs d'erreur
2. S'assurer que les dépendances sont à jour
3. Tester le build en local : `npm run build`
