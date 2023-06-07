import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // format Id
  loginForm:FormGroup;
  errorMsg: any;

  constructor( private formBuilder : FormBuilder , private router : Router,
   private accompagnantService : AccompagnantService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        telephone: ["", [Validators.required, Validators.minLength(8),Validators.maxLength(8)]],
        pwd: ["", [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      }
    )
  }

  login(){
    this.accompagnantService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("Here response after login ", response);
        if (response.msg != "2") {
          // message error
          this.errorMsg = "Please check Email/Pwd";
        } else {
          // localStorage////
          localStorage.setItem("connectedClient",response.user.id);
          if (response.user.role == "clients") {
            this.router.navigate(["information"]);
          } else {
            this.router.navigate([""]);
          }
        }

      }
    );
    
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })


  }
  }


