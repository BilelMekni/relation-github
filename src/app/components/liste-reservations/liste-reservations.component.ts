import { Component, OnInit } from '@angular/core';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-liste-reservations',
  templateUrl: './liste-reservations.component.html',
  styleUrls: ['./liste-reservations.component.css']
})
export class ListeReservationsComponent implements OnInit {

  constructor(private accompagnantService : AccompagnantService , private router : Router , 
    private clientService : ClientService) { }
  reservations:any;
  pageOfItems: Array<any>;

  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      (response)=>{
  this.reservations = response.clients;
  console.log("Here all clients", this.reservations);
      }
      
     )
     
  }
  accepter(id:any){
    this.router.navigate(["reservation"]);
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
