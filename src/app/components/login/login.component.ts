import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  //styleUrls: ['./app.component.css']
})
export class LoginComponent {
  
  

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  gotosignup() {alert("xy");
    this.router.navigateByUrl('/signup');
  }
  
}
