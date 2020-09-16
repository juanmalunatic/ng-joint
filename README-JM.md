# How to run this project

Compilation of this project assumes a specific directory structure: Two sibling folders (i.e. contained in the same parent folder).

Each folder is a separate repo,  forked and modified slightly to make this project work:
```
  %holder%/ng-joint
    https://github.com/juanmalunatic/ng-joint.git

  %holder%/ng-joint-schematics
    https://github.com/juanmalunatic/ng-joint-schematics.git
```
The tree of dependencies is outlined here as it's not obvious from the original README.

The last command compiles the whole project, therefore you should run think of these commands as being "upside down" in hierarchy: We start by compiling the dependencies and then we compile the app.

```
Angular App: ng-joint
(UI + demos)
/src/app

   Angular library: ng-joint
   (portable lib)
   /projects/ng-joint

      Schematic files for the ng-joint lib:
      (its code lives in ng-joint-schematics, but is compiled from ./ng-joint)
      /projects/ng-joint/src/schematic-build
      /projects/ng-joint/src/lib/schematic-generated
```

### a. Prepare the schematics' dependencies and templates
Every time you make a change on ng-joint-schematics you need to re-run 'npm run build', even to debug!
 ```
   $ cd ./ng-joint-schematics/
   $ npm install
   $ npm run build
```


### b. Link the schematic's project as a dependency to the ng-joint app and install all its dependencies

```
   $ cd ../ng-joint
   $ npm link ../ng-joint-schematics
   $ rm package-lock.json
   $ npm install
```

### c. Generate the schematics from the ng-joint app's context
```
   $ npm run build:schematic
```
   This should create the two required folders with its contents:

```
   /projects/ng-joint/src/schematic-build
   /projects/ng-joint/src/lib/schematic-generated
```

   (You can clean them up with ```npm run remove:schematic``` if they are messed up somehow)

### d. Compile the ng-joint library

This compiles only the distributable library:
```
   $ npm run dev:lib
```

This is (probably) what should be imported when creating a new project.

### e. Compile and run the ng-joint app (complete angular project)
```
   $ ng serve
```
   What's in this?
   - Material GUI
   - Mini apps that show how to use the ng-joint library

### f. Done!
  Head to http://localhost:4200 :)
