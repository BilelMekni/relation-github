import { Component, OnInit } from '@angular/core';
import { ValidationFinaleService } from './../../services/validation-finale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validatio-user',
  templateUrl: './validatio-user.component.html',
  styleUrls: ['./validatio-user.component.css']
})
export class ValidatioUserComponent implements OnInit {
  users : any;

  constructor(private validationFinaleService : ValidationFinaleService , private router : Router) { }

  ngOnInit() {
    this.validationFinaleService.getAllUsers().subscribe(
      (response)=>{
  this.users = response.users;
  console.log("Here all clients", this.users);
      }
      
     )
     
  }
  modifierUser(id : any){
    this.router.navigate([`modifierUser/${id}`]);
  }


}
