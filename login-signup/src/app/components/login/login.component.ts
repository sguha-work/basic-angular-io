import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AfterViewInit} from '@angular/core';
import {UserService} from './../../services/user.service';
declare var jQuery: any;
@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  //styleUrls: ['./app.component.css']
})
export class LoginComponent  implements AfterViewInit{
  
  private userService: UserService;
  public model: any;

  ngAfterViewInit() {
        jQuery("input").css({
            "border": "1px solid red"
        });
        alert(jQuery("input").length);
    }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.userService = new UserService();
    this.model = {};
    
  }

  login() {
    let password: string;
    password = this.userService.getUserPassword(this.model.email);
    if(password === "") {
      alert("user doesnot exists");
    } else {
      if(password === this.model.password) {
        alert("Success! going to home");
        this.router.navigate(['/home']);
      } else {
        alert("password mismatch");
      }
    }
  }

  gotosignup() {
    this.router.navigateByUrl('/signup');
  }
  
}
