import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women-information',
  templateUrl: './women-information.component.html',
  styleUrls: ['./women-information.component.css']
})
export class WomenInformationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  voirOne(id:any){
    this.router.navigate(["cordWomenOne"]);
  }
  voirTwo(id:any){
    this.router.navigate(["cordWomenTwo"]);
  }
  voirThree(id:any){
    this.router.navigate(["cordWomenThree"]);
  }
  voirFor(id:any){
    this.router.navigate(["cordWomenFor"]);
  }

}
