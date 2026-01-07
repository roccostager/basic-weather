# README
A template repository for webpack. Compatable with **vanilla HTML, CSS & Javascript**. This repository only contains dev-dependencies.

## Instructions
1. **Run** `npm install` **in the terminal** to install node dev dependencies.  

2. **Run** `npx webpack serve` **to start a webpack server**, allowing for dynamic development with live preview.  

3. Or simply **run** `npx webpack` **to update dist ***just once*****.  

4. <i>or use the scripts below to do the same...</i>

## First-time Deploy
The first-time deploy is a special case. Some extra commands need to be run.

1. `git branch <deploy-branch-name>`.
2. run `git status` in case anything should be commited before changing branch.
3. `git checkout gh-pages && git merge main --no-edit` to change branch and sync changes from main.
4. `np run build` to bundle application (or `npx webpack`).
5. `git add dist -f && git commit -m "Deployment commit"` to commit **dist**, which is usually in **.gitignore**.
6. `npm run deploy` will deploy the bundled application to the web (or `git subtree push --prefix dist origin gh-pages`).

## Scripts
This template also includes npm scripts for quality of life! All scripts can be run in the terminal using the command:
> `npm run <script-name>`

* `npm run build` replaces `npx webpack`.
* `npm run dev` replaces `npx webpack serve`.
* `npm run deploy` replaces `git subtree push --prefix dist origin gh-pages` (change in package.json).
