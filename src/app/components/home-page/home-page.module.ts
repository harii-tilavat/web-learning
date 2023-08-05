import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OurHelpComponent } from './our-help/our-help.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { MainSectionComponent } from '../../shared/main-section/main-section.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
]

@NgModule({
  declarations: [
    HomePageComponent,
    ContentComponent,
    OurClientsComponent,
    OurHelpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
