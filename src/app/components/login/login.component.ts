import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "@angular/fire/auth"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: User | null;

  constructor(public authService: AuthenticationService) {
    this.authService.authState$.subscribe((user) => {
      console.log("user", user);
      this.user = user;
    });
  }

}
