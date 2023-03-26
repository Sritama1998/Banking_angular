import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bankuser } from '../bankuser';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  bankuser:Bankuser=new Bankuser();

    constructor(private registeredService: RegisterService, private router:Router) {}

    ngOnInit():void {

    }

    userRegister(){
      console.log(this.bankuser);
      this.registeredService.registerUser(this.bankuser).subscribe(data=>{
        alert("Registered");
        this.goToLogin();
      });
    }

    goToLogin(){
      this.router.navigate(['/login-signup']);
    }
}




