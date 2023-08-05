import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResearchComponent } from './research/research.component';
import { BenefitsComponent } from './benefits/benefits.component';

const routes: Routes = [
  { path: '', component: TeamsComponent }
]

@NgModule({
  declarations: [
    TeamsComponent,
    ResearchComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamsModule { }
