// https://www.npmjs.com/package/ngx-md
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxMdModule } from 'ngx-md';

import { CodeExampleViewerComponent } from './code-example-viewer.component';

@NgModule({
  declarations: [
    CodeExampleViewerComponent
  ],
  imports: [
    CommonModule, HttpClientModule,
    MatToolbarModule, MatTabsModule, MatButtonModule, MatCardModule,
    FlexLayoutModule,
    NgxMdModule
  ],
  exports: [
    CodeExampleViewerComponent
  ]
})
export class CodeExampleViewerModule { }
