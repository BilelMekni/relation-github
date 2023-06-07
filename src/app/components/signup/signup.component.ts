import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import { AllAccompagnantsService } from 'src/app/services/all-accompagnants.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // FORM ID
signupForm:FormGroup;  
imagePreview : any;

cvPreview:any;
path : string;   
id : any;
match:any = {};
formTitle: string = "Signup Accompagnants";


  constructor( private formBuilder : FormBuilder , private router : Router,
    private accompagnantService : AccompagnantService ,private activatedRouter : ActivatedRoute,
    ) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group(
      {
        firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        telephone:["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
        email:["",[Validators.required,Validators.email]],
        pwd:["",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
        adresse:["",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
        experience:["",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
        gender:[""],
        img:[""],
        cv:[""],
    })

    
  }
  

  signup(){
    
    let accp = this.signupForm.value;
    accp.role = "accompagnent";
   accp.status = "not confirmed";
    // , this.signupForm.value.cv
    this.accompagnantService.signup(accp, this.signupForm.value.img, this.signupForm.value.cv).subscribe(
      (response) => {
        console.log("Here response", response);
      }
    );
    Swal.fire({
      title: 'Wellcome!',
      text: 'Votre insertion a ete bien recu',
      icon: 'error',
      confirmButtonText: 'Cool'
    })

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);

  
  

}
login(){
  this.router.navigate(["login"])
}

////////////
onCVSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.signupForm.patchValue({ cv: file });
  this.signupForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
  this.cvPreview = reader.result as string
  };
  reader.readAsDataURL(file);




}

}
