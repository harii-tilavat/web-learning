import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { TeamsLogoComponent } from './teams-logo/teams-logo.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainSectionComponent,
    TeamsLogoComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MainSectionComponent,
    QuestionComponent
  ]
})
export class SharedModule { }
