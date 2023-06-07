import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordo-women-one',
  templateUrl: './cordo-women-one.component.html',
  styleUrls: ['./cordo-women-one.component.css']
})
export class CordoWomenOneComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  contacterWomenOne(id:any){
this.router.navigate([""]);
  }
  retournerWomenOne(id:any){
this.router.navigate(["information"]);
  }

}
