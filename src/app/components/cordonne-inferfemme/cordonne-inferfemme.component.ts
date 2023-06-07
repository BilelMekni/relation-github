import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordonne-inferfemme',
  templateUrl: './cordonne-inferfemme.component.html',
  styleUrls: ['./cordonne-inferfemme.component.css']
})
export class CordonneInferfemmeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  contacter(id:any){
    this.router.navigate([""]);
  }
  retourner(id:any){
    this.router.navigate(["information"]);
  }

}
