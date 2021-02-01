
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistAlbumsPageComponent } from './artist-albums-page/artist-albums-page.component';

const routes: Routes = [
    {path: '', component: ArtistPageComponent},
    {path: ':id', component: ArtistAlbumsPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistPageRoutingModule { }
