import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-all-publication',
  templateUrl: './all-publication.component.html',
  styleUrls: ['./all-publication.component.css']
})
export class AllPublicationComponent implements OnInit {
  publications: any = [];
  pageOfItems: Array<any>;
  pub: any;
  id:any
  


  constructor( private publicationService: PublicationService, private router : Router ) { }

  ngOnInit() {
    this.publicationService.getAllPublications().subscribe(
      (response) => {
        this.publications = response.publications
        console.log("Here publication",this.publications);
      }
    );
   

   
    
  
     
  }
  // delete  all publications
  deletePublications(id: any) {
    this.publicationService.deletePublication(id).subscribe(
     (response) => {
       console.log("Here response after delete", response);
       this.getAllPublications();
     }
    );

}
// function tbargicha imta3 code
getAllPublications(){
  this.publicationService.getAllPublications().subscribe(
    (response) => {
      this.publications = response.publications;
    }
  )
}
// go to accept
goToAccepter(id : any){
  this.router.navigate(["consulterPublications"]);
}
/// go to display
goToDisplay(id:any){
  this.router.navigate(["voirResponse"])
}
// confirme publication
goToConfirme(id : any){
  this.publicationService.confirmePublication(id).subscribe(
    (response)=>{
      this.publications=response.message;
      this.publicationService.getAllPublications().subscribe(
        (response)=>{
          this.pub=response.publications
        }
      )

    }
  )
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }
}