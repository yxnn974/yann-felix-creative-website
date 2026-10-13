# Portfolio — Yann FELIX

> **Voir le portfolio en ligne : <https://yxnn974.github.io/yann-felix-creative-website/>**
> *View the portfolio online (available in French and English).*
>
> Ce dépôt contient le code source du site ; il n'est pas nécessaire de le télécharger pour le consulter.

Portfolio personnel d'un étudiant en BUT Réseaux & Télécommunications (IUT de La Réunion).
Site statique : HTML, CSS et JavaScript pur, sans framework ni étape de build.

## Structure

```
index.html            Page d'accueil (hero)
pages/                about, projects, skills, contact
includes/             Fragments HTML (français) : header, footer, hero, about, projects, skills, contact
includes/en/          Les mêmes fragments, en anglais
css/portfolio.css     Tout le style (thèmes sombre et clair)
js/include.js         Langue, thème, includes, menu, slider, filtres, formulaire
images/               Images optimisées (JPEG)
documents/            PDF des projets (+ cv_yann_felix.pdf à ajouter)
```

Chaque page contient `<body data-root="…">` : `./` pour `index.html`, `../` pour les pages du dossier `pages/`.
Dans les fragments, `{{root}}` est remplacé automatiquement par cette valeur.

## Thème clair/sombre et langue FR/EN

Les deux boutons du header mémorisent le choix du visiteur dans son navigateur (`localStorage`).
Sans choix enregistré, le site suit le réglage clair/sombre du système et la langue du navigateur
(français, sinon anglais). Un lien `…/index.html?lang=en` ouvre directement la version anglaise.

- **Thème** : couleurs définies par des variables CSS en tête de `css/portfolio.css`
  (`:root` pour le sombre, `:root[data-theme="light"]` pour le clair).
- **Langue** : `<html lang>` est posé par le petit script du `<head>`, puis `js/include.js` charge les
  fragments de `includes/` (FR) ou de `includes/en/` (EN). Le titre et la description de chaque page en
  anglais sont dans `data-title-en` / `data-desc-en` du `<body>`, les messages du formulaire dans le
  dictionnaire `TEXT` de `js/include.js`.
- **Modifier un texte** : le changer dans le fragment français **et** dans son équivalent de `includes/en/`.
- Les PDF des projets et le CV sont en français ; les boutons de la version anglaise l'indiquent « (FR) ».

## Tester en local

Le site charge ses fragments avec `fetch()` : il **ne fonctionne pas** en double-cliquant sur `index.html`
(`file://`). Il faut un petit serveur local :

- **VS Code + Live Server** : clic droit sur `index.html` → *Open with Live Server*.
- **Terminal** (dans le dossier du projet) : `python -m http.server 8080`, puis ouvrir <http://localhost:8080>.
  Avec ce serveur, `F5` dans VS Code lance Chrome sur le port 8080 (`.vscode/launch.json`).

## Envoyer sur GitHub

Dans VS Code : panneau *Source Control* → saisir un message → **Commit** → **Sync Changes**.
Ou dans le terminal :

```sh
git status                      # voir ce qui a changé
git add .                       # préparer tous les fichiers
git commit -m "Refonte du portfolio"
git push                        # envoyer sur GitHub
```

## Modifier le contenu

- **Ajouter un projet** : copier une balise `<article class="pcard">` dans `includes/projects.html`,
  changer image / texte / lien PDF, et adapter `data-category` (`reseau`, `telecom`, `dev`, plusieurs possibles).
- **CV** : déposer le fichier dans `documents/cv_yann_felix.pdf` — le bouton apparaît tout seul.
- **Mots qui défilent** : attribut `data-words` dans `includes/hero.html`.
- **Formulaire de contact** : sans configuration, le bouton ouvre le client mail. Pour un vrai envoi,
  renseigner `data-endpoint` dans `includes/contact.html` (ex. un formulaire Formspree).
