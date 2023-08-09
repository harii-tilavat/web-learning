import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { OurHelpComponent } from './our-help/our-help.component';
import { MainSectionComponent } from '../../shared/main-section/main-section.component';
import { ProductDetail } from './product-detail/product-detail.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
]

@NgModule({
  declarations: [
    HomePageComponent,
    ProductDetail,
    TestimonialComponent,
    OurHelpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
