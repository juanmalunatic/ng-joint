import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { NgJointModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { AngularTemplateOnlyComponent } from './angular-template-only/angular-template-only.component';
import { AngularBiDirBindComponent } from './angular-bi-dir-bind/angular-bi-dir-bind.component';
import { ShapesAngularExamplesRoutingModule } from './shapes-angular-examples-routing.module';

@NgModule({
  declarations: [
    ShapesAngularExamplesComponent,
    AngularTemplateOnlyComponent,
    AngularBiDirBindComponent
  ],
  imports: [
    CommonModule,
    NgJointModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSidenavModule,
    ShapesAngularExamplesRoutingModule
  ],
  exports: [
    ShapesAngularExamplesRoutingModule
  ]
})
export class ShapesAngularExamplesModule { }
