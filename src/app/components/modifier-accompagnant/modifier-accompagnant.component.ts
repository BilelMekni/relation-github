import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccompagnantService } from 'src/app/services/accompagnant.service';

@Component({
  selector: 'app-modifier-accompagnant',
  templateUrl: './modifier-accompagnant.component.html',
  styleUrls: ['./modifier-accompagnant.component.css']
})
export class ModifierAccompagnantComponent implements OnInit {
  modifierForm : FormGroup;
  id : any;
  accompagnant : any={};
  formTitle:string;

  constructor(private accompagnantService : AccompagnantService , private activatedRoute : ActivatedRoute,
    private router : Router , private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required,Validators.minLength(5)]],
      telephone:["",[Validators.required,Validators.pattern(/^\d{8}$/)]],
      adresse:["",[Validators.required,Validators.minLength(5)]]
    })
    this.formTitle="Update Accompagnant";
    this.accompagnantService.getAccptById(this.id).subscribe(
      (data)=>{
          console.log("here accompagnant",data);
          this.accompagnant = data.accompagnant;
          this.modifierForm.patchValue(this.accompagnant);
      }

   )
  }
  update(){
    this.modifierForm.value._id=this.id;
    console.log("here is edit form",this.modifierForm.value)
    this.accompagnantService.editAccompt(this.modifierForm.value).subscribe(
        (response) => { 
          console.log("here reponse is ", response);
          this.router.navigate(["admin"]);
        });
  }

}
