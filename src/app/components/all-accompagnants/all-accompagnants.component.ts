import { Component, OnInit } from '@angular/core';
import { AllAccompagnantsService } from 'src/app/services/all-accompagnants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-accompagnants',
  templateUrl: './all-accompagnants.component.html',
  styleUrls: ['./all-accompagnants.component.css']
})
export class AllAccompagnantsComponent implements OnInit {
  allaccomp : any=[];
  pageOfItems: Array<any>;

  constructor(private allAccompagnantService : AllAccompagnantsService , private router:Router) { }

  ngOnInit() {
    this.allAccompagnantService.getAllAll().subscribe(
      (response)=>{
        this.allaccomp = response.allaccomp
      }
    );
    console.log("Here all accompagnant",this.allaccomp);
    
  }
  // go to page homme
  goToDisplay(id : any){
    this.router.navigate([""]);
  }
  editAllToAccompagnat(id : any){
    this.router.navigate([`modifierAllAll/${id}`]);
  }
  

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
