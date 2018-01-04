import { User } from '../_models/user';
import { AuthenticationService } from '../_services';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent {
  public user = new User('', '');
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
         private authenticationService: AuthenticationService,
       ) { }

  login() {
       this.loading = true;
       this.authenticationService.login(this.user.username, this.user.password)
           .subscribe(
               data => {
                   console.log(this.user.username);
               },
               );
   }
}
