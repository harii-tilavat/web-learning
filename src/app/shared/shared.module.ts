import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { TeamsLogoComponent } from './teams-logo/teams-logo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainSectionComponent,
    TeamsLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MainSectionComponent
  ]
})
export class SharedModule { }
