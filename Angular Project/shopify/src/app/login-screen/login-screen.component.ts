import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  constructor(private router: Router) {}

  newChange(): void {
      let uname:any = document.getElementById("uname") ;
      let psw:any = document.getElementById("psw") ;
      if(uname.value == "hashem" && psw.value =="123456"){
        this.router.navigateByUrl('home-screen')
      }
      else {
        alert("wrong username or password")
      }
      ;
  }
}
