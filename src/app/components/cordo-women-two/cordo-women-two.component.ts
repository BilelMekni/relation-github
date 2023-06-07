import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordo-women-two',
  templateUrl: './cordo-women-two.component.html',
  styleUrls: ['./cordo-women-two.component.css']
})
export class CordoWomenTwoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  contacterWomenTwo(id:any){
    this.router.navigate([""]);
  }
  retournerWomenTwo(id:any){
this.router.navigate(["information"]);
  }

}
