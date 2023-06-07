import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-acceptation',
  templateUrl: './acceptation.component.html',
  styleUrls: ['./acceptation.component.css']
})
export class AcceptationComponent implements OnInit {
  accepterForm:FormGroup;
  // Define Object
accepter:any = {};
//ID
id : any;

  constructor(private router : Router, private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit() {
  }
  // validate(){
  //   if (this.id) {
  //     // Edit Match
  //     this.acceptationService.editAccept(this.accepter).subscribe(
  //       (data) =>{
  //         console.log("Here message after edit", data.message);
          
  //       }
  //     );
  //   } else {
  //     // Add Match
  //     this.acceptationService.addAccept(this.accepter).subscribe(
  //       (response) =>{
  //         console.log("Here response", response);
          
  //       }
  //     );
  //   }
  //   this.router.navigate(["admin"]);

  // }

}
