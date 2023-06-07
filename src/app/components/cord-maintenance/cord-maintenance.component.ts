import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cord-maintenance',
  templateUrl: './cord-maintenance.component.html',
  styleUrls: ['./cord-maintenance.component.css']
})
export class CordMaintenanceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  contacterMaintenance(id:any){
this.router.navigate(["displayAll"]);
  }
  retournerMaintenance(id){
    this.router.navigate(["information"]);
  }

}
