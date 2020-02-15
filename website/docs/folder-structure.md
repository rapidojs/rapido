---
id: folder-structure
title: Folder Structure
keywords:
  - docs
  - rapido
---

After creation, your project should look like this:

```
my-app/
  __tests__
    MainView.test.js
  assets
    icon.png
    splash.png
  views
    MainView.js
  web
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  .gitignore
  App.js
  app.json
  babel.config.js
  package.json
  README.md
  theme.js
```

For the project to build, **these files must exist with exact filenames**:

- `app.json` is the app config file;
- `App.js` is the JavaScript entry point.

You can delete or rename the other files.

If you have Git installed and your project is not part of a larger repository, then a new repository will be initialized resulting in an additional top-level `.git` directory.
