import { Component, OnInit } from '@angular/core';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import { Router } from '@angular/router';
import { Swal } from 'sweetalert2/dist/sweetalert2.js';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-affichage-listeaccompanant',
  templateUrl: './affichage-listeaccompanant.component.html',
  styleUrls: ['./affichage-listeaccompanant.component.css']
})
export class AffichageListeaccompanantComponent implements OnInit {
  id:any;
  affiche:any;

  constructor( private accompagnantService : AccompagnantService , private router : Router , private publicationService : PublicationService) { }

  ngOnInit() {
    
    this.accompagnantService.getAllAccps().subscribe(
      (response) => {
        this.affiche = response.accompts
        console.log("Here affichage", this.affiche);
      }
      
    );
    
  }
  
  display(aff :any){
    

  this.router.navigate(["displayAll"]);
  }
    
  contacter(aff:any){
    this.router.navigate(["listeReservations"]);
    
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    
  }
}
    
