import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HowToUseDocModule } from '../how-to-use-doc';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    MatListModule, MatIconModule,
    HowToUseDocModule,
    OverviewRoutingModule],
  exports: [OverviewRoutingModule]
})
export class OverviewModule { }
