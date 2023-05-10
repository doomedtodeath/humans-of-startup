import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {EpisodeComponent} from "./episode/episode.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'episode',
    component: EpisodeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
