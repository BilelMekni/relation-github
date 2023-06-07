import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeAccompagnantComponent } from '../liste-accompagnant/liste-accompagnant.component';
import { AccompagnantService } from 'src/app/services/accompagnant.service';


@Component({
  selector: 'app-publicite-principale',
  templateUrl: './publicite-principale.component.html',
  styleUrls: ['./publicite-principale.component.css']
})
export class PublicitePrincipaleComponent implements OnInit {
  accompts: any = [];
  pageOfItems: Array<any>;


  constructor(private router : Router , private accompagnantService : AccompagnantService) { }

  ngOnInit() {
    this.accompagnantService.getAllAccps().subscribe(
      (response)=>{
        this.accompts =  response.accompts
        console.log("Here publicite page principale",this.accompts);
      }
    );
    
    
  }
///------display all--------///////
displayAll(id:any){
  this.router.navigate(["displayAll"]);
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }




}
