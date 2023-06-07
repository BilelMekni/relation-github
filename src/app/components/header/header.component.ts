import { Component, OnInit } from '@angular/core';
import { AcceptationComponent } from './../acceptation/acceptation.component';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:any;
  connectedClient:any = {};


  constructor( private accompagnantService : AccompagnantService , private clientService :ClientService,
    private adminService : AdminService, private router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem("connectedClient");
    this.accompagnantService.getAccptById(this.id).subscribe(
      (response)=>{
        this.connectedClient=response.accompagnant;
        console.log("here connected",this.connectedClient);
        
      }
    )
    this.clientService.getClientById(this.id).subscribe(
      (response)=>{
        this.connectedClient=response.client;
        console.log("here connected",this.connectedClient);
        
      }
    )
    this.adminService.getAdminById(this.id).subscribe(
      (response)=>{
        this.connectedClient=response.admin;
        console.log("here connected",this.connectedClient);
        
      }
    )
    

   
  }
  logOut(){
    localStorage.removeItem("connectedClient");
    this.router.navigate([""]);
  }

}
