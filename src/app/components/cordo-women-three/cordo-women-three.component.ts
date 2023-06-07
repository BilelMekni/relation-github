import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordo-women-three',
  templateUrl: './cordo-women-three.component.html',
  styleUrls: ['./cordo-women-three.component.css']
})
export class CordoWomenThreeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  contacterWomenThree(id:any){
this.router.navigate([""]);
  }
  retournerWomenThree(id:any){
this.router.navigate(["information"]);
  }

}
