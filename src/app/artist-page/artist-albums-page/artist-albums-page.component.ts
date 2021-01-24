import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProxyService } from 'src/app/services/proxy.service';
import { api } from 'src/app/services/proxy.service'
@Component({
  selector: 'app-artist-albums-page',
  templateUrl: './artist-albums-page.component.html',
  styleUrls: ['./artist-albums-page.component.css']
})
export class ArtistAlbumsPageComponent implements OnInit {
ArtistId;
ArtistAlbum: any[];

  constructor(private proxy: ProxyService,private actRoute: ActivatedRoute,private location: Location,private router: Router) {
    this.ArtistId = this.actRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    if(localStorage.getItem('accesstoken') === 'undefined' || localStorage.getItem('accesstoken') === null ){
      localStorage.clear();
      this.router.navigate(['/'])
    };
    this.GetArtistAlbums();
  }

  GetArtistAlbums(){  
    this.proxy.get( `${api}artists/${this.ArtistId}/albums?offset=0&limit=20&include_groups=album,single,compilation,appears_on` )
              .subscribe(result => {
                          this.ArtistAlbum = result.items;
                        })
}

  back() {
    this.location.back();
  }
}
