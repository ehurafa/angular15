import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "about", component: AboutComponent, children: [
    { path: 'foo', component: AboutComponent }
  ]},
  { path: "about/:id/:username", component: AboutComponent },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule) },
  { path: "404", component: ErrorComponent },
  { path: "**", redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
