import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../../services/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {
  clients:any=[];
  pageOfItems: Array<any>;
  message : any;
  id:any;
  client : any;


  constructor( private clientService : ClientService , private router :Router,
    private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      (response)=>{
  this.clients = response.clients;
      }
     )
     console.log("Here all clients", this.clients);
  }
  confirmeClient(id : any){
    this.clientService.confirmeClient(id).subscribe(
      (response)=>{
        this.client=response.message;
        this.clientService.getAllClients().subscribe(
          (response)=>{
            this.client=response.clients
          }
        )
  
      }
    )
  }
  

  //go to display consulting piblication/////
  goToDisplay(){
    this.router.navigate(["consulterPublications"])
  }
  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
