import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-client-envoyer',
  templateUrl: './client-envoyer.component.html',
  styleUrls: ['./client-envoyer.component.css']
})
export class ClientEnvoyerComponent implements OnInit {
  publiciteForm: FormGroup;
  // Define Object
  publicite: any = {};
  //ID
  id: any;
  publications: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private publicationService: PublicationService) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClient");
    this.publicationService.getPublicationById(this.id).subscribe(
      (response) => {
        this.publications = response.pubs
      }
    )

  }
  // Methode (ngSubmit)
  validate() {
    if (this.id) {
      // Edit publication

      // Add publication
      this.publicite.clientId = this.id;
      this.publicite.status = "Not Confirmed";
      this.publicite.reservation = "waiting";
     
      this.publicationService.addPublication(this.publicite).subscribe(
        (response) => {
          console.log("Here response", response);

        }
      );
    }
    this.router.navigate(["successPublication"]);

  }
  retour(id: any) {
    this.router.navigate([""]);
  }


}
