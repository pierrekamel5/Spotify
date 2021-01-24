
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: '',component: LoginPageComponent,pathMatch:'full'},
  {path: 'artists', loadChildren: () => import('./artist-page/artist-page.module').then(m => m.ArtistPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
