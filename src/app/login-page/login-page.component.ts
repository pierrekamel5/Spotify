import { ProxyService } from 'src/app/services/proxy.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { env } from 'process';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  env = environment;

  url =this.env.auth.url;
  client_id = this.env.auth.client_id ;
  redirect_uri = this.env.auth.redirect_uri ;
  response_type = this.env.auth.response_type;

  constructor(private router : Router,private proxy: ProxyService) {
   }
  ngOnInit(): void {
    if(localStorage.getItem("isAuthenticated") == "true" ){
      this.router.navigate(['/artists']);
    }
  }
 login(){
  
  window.location.assign(this.url + "?client_id="+this.client_id+"&redirect_uri="+this.redirect_uri+"&response_type="+this.response_type);
}

}
