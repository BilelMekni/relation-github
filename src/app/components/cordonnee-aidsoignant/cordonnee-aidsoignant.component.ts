import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordonnee-aidsoignant',
  templateUrl: './cordonnee-aidsoignant.component.html',
  styleUrls: ['./cordonnee-aidsoignant.component.css']
})
export class CordonneeAidsoignantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  contacter(id: any){
    this.router.navigate([""]);
  }
  retourner(id:any){
this.router.navigate(["information"]);
  }

}
