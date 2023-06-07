import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationFinaleService } from './../../services/validation-finale.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {

  modifierForm : FormGroup;
  id : any;
  user : any;
  constructor(private activetedRouter : ActivatedRoute , private validationFinaleService : ValidationFinaleService,
    private router : Router , private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.id = this.activetedRouter.snapshot.paramMap.get("id");
    console.log(this.id);
    console.log(this.id);
 
    this.modifierForm = this.formBuilder.group(
      {
        telephone: ["", [Validators.required,Validators.pattern(/^\d{8}$/)]],
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]]
      })
    this.validationFinaleService.getUserById(this.id).subscribe(
      (data) => {
        console.log("here client",data);
        
        this.user = data.client;
        this.modifierForm.patchValue(this.user);

      }
    )
  }
  update(){
    this.modifierForm.value._id=this.id;
    console.log("here is edit form",this.modifierForm.value)
    this.validationFinaleService.editClient(this.modifierForm.value).subscribe(
        (response) => { 
          console.log("here reponse is ", response);
          this.router.navigate(["validationUser"])
        
        });
       
        
  }

}
