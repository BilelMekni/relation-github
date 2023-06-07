import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
   
    
  }
  accepter(id : any){
    this.router.navigate(["sante-information"]);
  
  }
  voirPublication(id : any){
    this.router.navigate(["client-envoyer"]);
  }
  accepterWomen(id: any){
    this.router.navigate(["womenInformation"]);
  }
  accepterMaintenance(id:any){
    this.router.navigate(["maintenance"]);
  }
}
