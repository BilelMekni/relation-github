import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sante-information',
  templateUrl: './sante-information.component.html',
  styleUrls: ['./sante-information.component.css']
})
export class SanteInformationComponent implements OnInit {
  id : any;

  constructor(private  activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }
  voir(id : any){
    this.router.navigate(["cordonne-infiohomme"]);
  
  }
  aide(id : any){
    this.router.navigate(["cordonne-aidesoignant"]);
  }
  femme(id : any){
    this.router.navigate(["cordonne-infifemme"]);
  }
  

}
