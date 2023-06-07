import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {

  signupForm: FormGroup;
  imagePreview: any;
  path: string;

  constructor( private formBuilder : FormBuilder , private router : Router,
   private clientService : ClientService) { }

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
        gender:[""],
        img:[""],
    })
  
  }
  signup(){
    let client = this.signupForm.value;
    client.role = "clients";
   client.status = "not confirmed";
    console.log("here object",this.signupForm.value);
    let role = (this.path == "/signupClient")? "clients" : "admin";
    this.signupForm.value.role = role;
    this.clientService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (response) =>{
        console.log("here after signup" ,response);
        
      }
    );
    Swal.fire({
      title: 'BIENVENUE!',
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
  this.router.navigate(["login"]);
}
}
