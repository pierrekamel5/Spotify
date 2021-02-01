import { Router } from '@angular/router';
import {  Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { ProxyService } from 'src/app/services/proxy.service';
import { api } from 'src/app/services/proxy.service'
@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArtistPageComponent implements OnInit {
  
  artists: any[];
  clonedArtists: any[];

  constructor(private proxy: ProxyService,private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('accesstoken') == 'undefined' || localStorage.getItem('accesstoken') === null ){
      localStorage.clear();
      this.router.navigate(['/'])
    };
  this.getArtists();

  }
  getArtists(){
    this.proxy.get( `${api}search?query=Nirvana&type=artist&offset=0&limit=20`)
              .subscribe(result => {
                this.artists = result.artists.items;
                this.clonedArtists = result.artists.items;
              })
   }

  searchArtist(event: any){

    if(event.target.value != ''){
      this.proxy.get(`${api}search?query=${event.target.value}&type=artist&offset=0&limit=20` )
                .subscribe(res => this.artists =  res.artists.items);
    } else {
      this.artists = this.clonedArtists;
    }     
  }
}

