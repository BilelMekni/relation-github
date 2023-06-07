import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-publicaitons',
  templateUrl: './success-publicaitons.component.html',
  styleUrls: ['./success-publicaitons.component.css']
})
export class SuccessPublicaitonsComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }
  RetourPublication(){
    this.router.navigate([""]);
  }
  voirReponse(id : any){
    this.router.navigate(["voirResponse"]);
  }

}
