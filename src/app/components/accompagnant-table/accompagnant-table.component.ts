import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccompagnantService } from 'src/app/services/accompagnant.service';
import { AllAccompagnantsService } from 'src/app/services/all-accompagnants.service';

@Component({
  selector: 'app-accompagnant-table',
  templateUrl: './accompagnant-table.component.html',
  styleUrls: ['./accompagnant-table.component.css']
})
export class AccompagnantTableComponent implements OnInit {
  accompts : any
  pageOfItems: Array<any>;
  id : any;
  confirme:any;
  accp : any;

  constructor( private router : Router,
    private accompagnantService : AccompagnantService , private allAccompagnantService : AllAccompagnantsService) { }

  ngOnInit() {
    this.accompagnantService.getAllAccps().subscribe(
      (response) => {
        this.accompts = response.accompts
      }
    );

    console.log("Here accompagnant",this.accompts);
  }
  editToAccompagnat(id : any){
    this.router.navigate([`modifierAccompagnat/${id}`]);
    
  }
  confirmeAccompagnant(id:any){
    this.accompagnantService.confirmeAccp(id).subscribe(
      (response)=>{
        this.accp=response.message;
        this.accompagnantService.getAllAccps().subscribe(
          (response)=>{
            this.accp=response.accompts
          }
        )
  
      }
    )
    
   /////----delete accompagnat table with admin----////
   

  
  }
  deleteAccompt(id : any){
    this.accompagnantService.deleteAccTable(id).subscribe(
      (response) => {
        console.log("Here response after delete", response);
        this.getAllAccTable();
      }
     );
  }
  getAllAccTable(){
    this.accompagnantService.getAllAccps().subscribe(
      (response) => {
        this.accp = response.accompts;
      }
    )
  }

  /// go to diplay all accompagnants---////
  goToDisplay(){
    this.router.navigate(["displayAll"]);
  }




  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
