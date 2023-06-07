import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationFinaleService } from './../../services/validation-finale.service';
import { Swal } from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-validation-signup',
  templateUrl: './validation-signup.component.html',
  styleUrls: ['./validation-signup.component.css']
})
export class ValidationSignupComponent implements OnInit {
  inscriptionForm : FormGroup;
  path : any;

  constructor(private formBuilder : FormBuilder , private router : Router , private validatioFinaleService : ValidationFinaleService) { }
  signupForm : FormGroup;
  imagePreview: any;
 

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group(
      {
        firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        telephone:["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
       
        pwd:["",[Validators.required,Validators.minLength(10),Validators.maxLength(14)]],
      
        
     

      }
    
    )
  }
  signupV(){
   
    this.validatioFinaleService.signupV(this.signupForm.value).subscribe(
      (response) =>{
        console.log("here after signup" ,response);
        
      }
     
    );
    
  }
  login(){
    this.router.navigate(["validationLogin"])
  }
}
