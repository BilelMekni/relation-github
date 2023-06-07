import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { ClientService } from './../../services/client.service';


@Component({
  selector: 'app-espace-client',
  templateUrl: './espace-client.component.html',
  styleUrls: ['./espace-client.component.css']
})
export class EspaceClientComponent implements OnInit {
  reserves: any = [];
  pageOfItems: Array<any>;
  pubs:any;
  id:any;

  constructor(private router : Router , private clientService : ClientService , private publicationService : PublicationService) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClient");
  
    this.publicationService.getPublicationById(this.id).subscribe(
      (response) => {

        this.pubs = response.pubs
        console.log("Here Espace clients",this.pubs);
      }
      
    );
   
    
    

  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}

