import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';

import { NgJointModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { AngularElementTemplateOnlyComponent } from './angular-element-template-only/angular-element-template-only.component';
import { AngularElementBiDirBindComponent } from './angular-element-bi-dir-bind/angular-element-bi-dir-bind.component';
import { ShapesAngularExamplesRoutingModule } from './shapes-angular-examples-routing.module';

@NgModule({
  declarations: [
    ShapesAngularExamplesComponent,
    AngularElementTemplateOnlyComponent,
    AngularElementBiDirBindComponent
  ],
  imports: [
    CommonModule, ShapesAngularExamplesRoutingModule,
    NgJointModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule,
  ],
  exports: [
    ShapesAngularExamplesRoutingModule, ShapesAngularExamplesComponent
  ]
})
export class ShapesAngularExamplesModule { }
