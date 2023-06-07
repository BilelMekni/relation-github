import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordonnee-infhomme',
  templateUrl: './cordonnee-infhomme.component.html',
  styleUrls: ['./cordonnee-infhomme.component.css']
})
export class CordonneeInfhommeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  contacter(id : any){
    this.router.navigate([""]);
  }
  Retourner(id:any){
    this.router.navigate(["information"]);
  }

}
