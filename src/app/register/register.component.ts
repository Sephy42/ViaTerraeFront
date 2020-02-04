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

  public error: string = '';
  public registerForm: FormGroup;
  public spinner: boolean= false;

  constructor(private formBuilder: FormBuilder,private userService: UserService ,private router: Router) { }

  public get firstName():AbstractControl{
    return this.registerForm.controls.firstName;
  }

  public get name():AbstractControl{
    return this.registerForm.controls.name;
  }

  public get birthDate():AbstractControl{
    return this.registerForm.controls.birthDate;
  }

  public get phone():AbstractControl{
    return this.registerForm.controls.phone;
  }

  public get email():AbstractControl{
    return this.registerForm.controls.email;
  }

  public get password():AbstractControl{
   return this.registerForm.controls.password;
  }   

  ngOnInit() {
    this.registerForm= this.formBuilder.group({   
      firstName:['',
      ],

      name:['',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
 
      birthDate:['',],

      phone:['', ],
      
      email:['',
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
      this.userService.userCreation(this.registerForm.value).subscribe( r => {
        //hide spinner
        this.spinner=false;
        console.log(r);
        if (r){ 
          // ok user created
          this.error = "ok";
          this.router.navigate(['register']);}
        else{
          console.log('Something is wrong !');
        }   
      }, err => { 
         if(err.error.message==='RG-12345') this.error = "Cette adresse mail est déjà utilisée.";
       });
     
    }
    
    public isNotFormValid(): boolean {
      return this.registerForm.invalid;
    }

}