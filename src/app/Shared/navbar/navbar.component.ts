import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() keyword = new EventEmitter<string>();
  @Input() showSearchBar = false;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  back() {
    this.location.back();
  }
  searchKeyword(event: any){
    this.keyword.emit(event.target.value);    
  }
}
