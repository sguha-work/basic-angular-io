import { Component } from '@angular/core';
import {UserService} from './../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: 'signup.template.html',
  //styleUrls: ['./app.component.css']
})
export class SignupComponent {
  public model: any;
  private userService: UserService;
  constructor(private router: Router) {
     this.model = {};
     this.userService = new UserService();
     
  }

  public createUser() {
    if(this.userService.setUser(this.model)) {
      alert("Sign up successfull");
      this.router.navigate(['/login']);
    } else {
      alert("falied to register user");
    }
  }

}
