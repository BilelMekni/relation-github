import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationFinaleService } from './../../services/validation-finale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation-login',
  templateUrl: './validation-login.component.html',
  styleUrls: ['./validation-login.component.css']
})
export class ValidationLoginComponent implements OnInit {
  // format Id
  loginForm:FormGroup;
  errorMsg: any;

  constructor(private formBuilder : FormBuilder , private validationFinaleService : ValidationFinaleService, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        
        telephone: ["", [Validators.required, Validators.minLength(8),Validators.maxLength(8)]],
        pwd: ["", [Validators.required,Validators.minLength(10),Validators.maxLength(14)]],
      }
    )
  }
  login(){
    this.validationFinaleService.login(this.loginForm.value).subscribe(
      (response)=>{
        console.log("Here response after login ", response);
        if (response.msg == "user conceted") {
          // message error
          this.router.navigate(["validationUser"]);
        } else {
          console.log(response.msg);
          

          
            
          
         
         
  
            
         
          }
        }
    )

      }
    }
