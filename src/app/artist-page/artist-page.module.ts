import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistPageRoutingModule } from './artist-page-routing.module';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ArtistAlbumsPageComponent } from './artist-albums-page/artist-albums-page.component';
import { CardModule} from 'primeng/card';
import { RatingStarsPipe } from '../pipe/rating-stars.pipe';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [ArtistPageComponent, ArtistAlbumsPageComponent,
    RatingStarsPipe],
  imports: [
    CommonModule,
    ArtistPageRoutingModule,
    RatingModule,
    FormsModule,
    CardModule,
    ButtonModule
  ]
})
export class ArtistPageModule { }
