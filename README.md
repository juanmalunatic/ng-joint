# NgJointApp

Library to make JoinJs fantastic Diagram features working in an Angular 7 Declarative Template.  

### JM log
2020-09-21 19:28:57 - Finished update to ng8

## Version 0.0.1

This second pre-release version contains the starting points for fututure developments. The library is organised make it extendable and conform to angular standards.
* added demo application in ghpages see [Standard Elements page](https://dgwnu.github.io/ng-joint/shapes-standard-examples/standard-elements)  

### Joint JS Angular Elements

Added functionality to make Angular Elements working inside a Joint JS Boundary Box. First example excepts also Input and Focus to use buttons and fields inside the box (tested with Angular Material components).  
See [Angular Elements Template only source](https://github.com/dgwnu/ng-joint/tree/master/src/app/shapes-angular-examples/angular-template-only).   
And [Angular Template only example page](https://dgwnu.github.io/ng-joint/shapes-angular-examples/angular-template-only).  

### Requirements

#### Import joinjs style-sheet

Add this import at the end of the styles.(s)css of youre angular app.

```css
@import '~jointjs/dist/joint.css';  
```

_This contains jointjs packacge delivered background, grid-styles, ... etc._
## Structural Directives Demo

Added Interfaces to use jointjs Elements and Links with angular structural directive capabilities like *ngFor, *ngIf, ..etc..  
See [Angular Bi-Directional Bind source](https://github.com/dgwnu/ng-joint/tree/master/src/app/shapes-angular-examples/angular-bi-dir-bind)  
And [Angular Bi-Directional Bind example page](https://dgwnu.github.io/ng-joint/shapes-angular-examples/angular-bi-dir-bind).

## Version 0.0.0

Pre-Release
