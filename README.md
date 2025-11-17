# Angel Cromwell — Personal Academic Website (static)

This repository is a minimal static site for Angel Cromwell (University of Montana).
It is designed for straightforward deployment to **GitHub Pages**.

## What’s included
- `index.html` — single-page site with sections for About, Research & Projects, Teaching, Publications, Contact.
- `assets/css/styles.css` — responsive styling with a light/dark theme toggle.
- `assets/js/main.js` — theme toggle, mobile nav, and dynamic year.
- `assets/img/profile.svg` — placeholder profile image.
- `assets/img/placeholder-cv.pdf` — placeholder for your CV (replace with your real CV).

## How to publish on GitHub Pages

### Option A — User or Organization site (recommended, simplest)
Create a repository named: **`<your-github-username>.github.io`** (for example `angelcromwell.github.io`).

From your local machine:
```bash
# inside the folder angel-cromwell-site
git init
git add .
git commit -m "Initial site commit"
# replace below with your GitHub repo url
git remote add origin https://github.com/your-github-username/your-repo-name.git
git branch -M main
git push -u origin main