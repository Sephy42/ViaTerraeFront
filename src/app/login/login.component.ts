import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public loginForm: FormGroup;
 public spinner: boolean= false;

  constructor(private formBuilder: FormBuilder,private userService: UserService ,private router: Router) { 

  }
 public get login():AbstractControl{
   return this.loginForm.controls.login;
 }
 public get password():AbstractControl{
  return this.loginForm.controls.password;
}


  ngOnInit() {
    this.loginForm= this.formBuilder.group({    
    login:['',
    [
      Validators.required,
      Validators.minLength(5)
    ]
  ],

    password:['',
    [
      Validators.required,
    Validators.minLength(5)
   ],
  ]
  });

  }
public go(): void {

// show spinner
  this.spinner=true;
  this.userService.userIdentification(this.loginForm.value).subscribe( r=> {
    //hide spinner
    this.spinner=false;
    console.log(r);
    if (r){ 
      // ok user identified
      this.router.navigate(['home']);}
    else{
      console.log('You are not a client. Please register.');
    }   
  });
 
}

public isNotFormValid(): boolean {
  return this.loginForm.invalid;
}


}

