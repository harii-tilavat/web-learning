import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'teams', loadChildren: () => import('./components/teams/teams.module').then(m => m.TeamsModule) },
  { path: 'quiz', loadChildren: () => import('./components/quiz/quiz.module').then(m => m.QuizModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
