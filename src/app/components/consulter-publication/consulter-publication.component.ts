import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulter-publication',
  templateUrl: './consulter-publication.component.html',
  styleUrls: ['./consulter-publication.component.css']
})
export class ConsulterPublicationComponent implements OnInit {
  pubs: any;
  id:any;

  constructor(private publicationService: PublicationService, private router: Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClient");
    this.publicationService.getConfirmPublications().subscribe(
      (response) => {
        this.pubs = response.pubs
        console.log("Here publication", this.pubs);
      }
    );

  }
  Contacter(pub:any) {
    
    Swal.fire({
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      title: 'Are you sure?',
      html:`First Name: ${pub.clients[0].firstName}<br> Email: ${pub.clients[0].email} <br> Adress: ${pub.clients[0].adresse}`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accepter Ce Travail'
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicationService.postNotif({_id:pub._id, accompagnantId: this.id, reservation: 'reserved' }).subscribe(
          (response) => {
            console.log("here notif", response)
          });
          
        Swal.fire(
          'Confirmed!',
          'Your file has been confirmed.',
          'success'
        )
      }
    })
    this.router.navigate([""]);

  }
  }
  
