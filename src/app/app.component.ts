import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import {ROUTER_CONFIGURATION} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{ path: 'login', component: LoginComponent }];

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `,
})



export class AppComponent {
  title = 'Balu - first angular appp2';
}
