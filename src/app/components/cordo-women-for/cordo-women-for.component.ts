import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cordo-women-for',
  templateUrl: './cordo-women-for.component.html',
  styleUrls: ['./cordo-women-for.component.css']
})
export class CordoWomenForComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  contacterWomenFor(id:any){
this.router.navigate([""]);
  }
  retourWomenFor(id:any){
this.router.navigate(["information"]);
  }

}
