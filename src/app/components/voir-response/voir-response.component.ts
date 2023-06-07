import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-voir-response',
  templateUrl: './voir-response.component.html',
  styleUrls: ['./voir-response.component.css']
})
export class VoirResponseComponent implements OnInit {
  acceptes: any = [];

  constructor(private router : Router , private requestService : RequestService ) { }

  ngOnInit() {
    this.requestService.getAllReserv().subscribe(
      (response) => {
        this.acceptes = response.allreservation
      }
    );

    console.log("Here response",this.acceptes);
  }
  retour(id : any){
    this.router.navigate([""]);
  }
//// delete response////
deleteReponse(id:any){
  this.requestService.deleteReponse(id).subscribe(
    (response)=>{
      console.log("here delete reponse",response);
      this.requestService.getAllReserv().subscribe(
        (response)=>{
          this.acceptes = response.allreservation;
        }
      )
      
    }
  )
}

  
  }

