import { Component, OnInit } from '@angular/core';
import { AllAccompagnantsService } from 'src/app/services/all-accompagnants.service';

@Component({
  selector: 'app-diplay',
  templateUrl: './diplay.component.html',
  styleUrls: ['./diplay.component.css']
})
export class DiplayComponent implements OnInit {
  accomp:any;
  pageOfItems: Array<any>;

  constructor(private allAccompanentService : AllAccompagnantsService) { }

  ngOnInit() {
    this.allAccompanentService.getAllAll().subscribe(
      (response) => {
        this.accomp = response.allaccomp
      }
    );

    console.log("Here all accompagnant",this.accomp);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
