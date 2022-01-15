import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { Page404Component } from './views/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  { path: '**',
    pathMatch: 'full',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
