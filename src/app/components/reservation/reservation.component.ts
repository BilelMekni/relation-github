import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import { RequestService } from './../../services/request.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservForm:FormGroup;
  reserv:any = {};
  id:any;

  constructor(private formBuilder:FormBuilder,private router:Router,
    private requestService :RequestService,
    ) { }

  ngOnInit() {
   
  }

  validate(){
    if (this.id) {
      // Edit reserv
      // this.reservationService.editAccept(this.accepter).subscribe(
      //   (data) =>{
      //     console.log("Here message after edit", data.message);
          
      //   }
      // );
    } else {
     // Add Reserv
      this.requestService.addReserv(this.reserv).subscribe(
        (response) =>{
          console.log("Here response", response);
          
        }
      );
    }
    this.router.navigate([""]);

  // }
    }
  
  retourner(id:any){
    this.router.navigate(["information"]);
  }



  
}
