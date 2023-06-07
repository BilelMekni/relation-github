import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccompagnantService } from './../../services/accompagnant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  accompagnats : any ;
  id: any;
  chercher:any=[];
 
  constructor( private formBuilder : FormBuilder , private  accompagnantService : AccompagnantService,
    private router : Router ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        adresse:["",[Validators.required]],
        experiencemax :["",[Validators.required]],
        experiencemin :["",[Validators.required]],
      }
    );
    
      
  }
  search(){
    console.log("here search obj", this.searchForm.value);
    this.accompagnantService.searchAccompagnants(this.searchForm.value).subscribe(
      (response) =>{
        this.chercher = response.searchTab;
       console.log("here serch",this.chercher);
       
        
      }
      
    );
  }

}
