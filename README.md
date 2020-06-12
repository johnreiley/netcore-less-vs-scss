# .Net Core - Less vs Scss


## Setup

1. Right click `package.json` and click "**Restore Packages**" to install necessary npm packages.
2. Right click `gulpfile.js` and click "**Task Runner Explorer**". This will open the Task Runner Explorer at the bottom.
3. Click on the arrow dropdown next to `Gulpfile.js` in the Task Runner Explorer window. It will reaveal the following structure:
```
Gulpfile.js
 |
 +---- Tasks
        |
        +---- build
```
4. Right click `build` and click "**Before Build**" under "**Bindings**". Now anytime the project is built, the Less and Scss files will be transpiled.


## Exercises
