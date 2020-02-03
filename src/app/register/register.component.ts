import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public spinner: boolean= false;

  constructor(private formBuilder: FormBuilder,private userService: UserService ,private router: Router) { }

  public get firstname():AbstractControl{
    return this.registerForm.controls.firstname;
  }

  public get name():AbstractControl{
    return this.registerForm.controls.name;
  }

  public get birthdate():AbstractControl{
    return this.registerForm.controls.birthdate;
  }

  public get phone():AbstractControl{
    return this.registerForm.controls.phone;
  }

  public get login():AbstractControl{
    return this.registerForm.controls.login;
  }

  public get password():AbstractControl{
   return this.registerForm.controls.password;
  }   

  ngOnInit() {
    this.registerForm= this.formBuilder.group({   
      firstname:['',
      ],

      name:['',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
 
      birthdate:['',],

      phone:['', ],
      
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
      this.userService.userIdentification(this.registerForm.value).subscribe( r => {
        //hide spinner
        this.spinner=false;
        console.log(r);
        if (r){ 
          // ok user identified
          this.router.navigate(['home']);}
        else{
          console.log('Something is wrong !');
        }   
      });
     
    }
    
    public isNotFormValid(): boolean {
      return this.registerForm.invalid;
    }

}