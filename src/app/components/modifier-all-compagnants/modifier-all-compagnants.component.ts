import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AllAccompagnantsService } from 'src/app/services/all-accompagnants.service';

@Component({
  selector: 'app-modifier-all-compagnants',
  templateUrl: './modifier-all-compagnants.component.html',
  styleUrls: ['./modifier-all-compagnants.component.css']
})
export class ModifierAllCompagnantsComponent implements OnInit {
  modifierAllForm : FormGroup;
  formTitle:string;
  id:any;
  message : any = {};

  constructor(private formBuilder : FormBuilder , private router : Router , private allAccompagnantsService : AllAccompagnantsService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierAllForm = this.formBuilder.group(
      {
        firstName: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
        lastName: ["",[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
        telephone: ["", [Validators.required, Validators.minLength(8),Validators.maxLength(8)]],
        adresse: ["", [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      }
    )
  
  this.formTitle = "Edit All All Accompagnants";
  
  this.allAccompagnantsService.getAllAllById(this.id).subscribe(
    (data) => {
      console.log("here all all accompagnants",data);
      
      this.message = data.message;
      this.modifierAllForm.patchValue(this.message);
    }
  )
}
update(){
  this.modifierAllForm.value._id=this.id;
  console.log("here is edit form",this.modifierAllForm.value)
  this.allAccompagnantsService.editAllAll(this.modifierAllForm.value).subscribe(
      (response) => { 
        console.log("here reponse is ", response);
        this.router.navigate(["displayAll"]);
      });
}


}
