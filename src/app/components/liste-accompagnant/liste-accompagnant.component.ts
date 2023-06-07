import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-liste-accompagnant',
  templateUrl: './liste-accompagnant.component.html',
  styleUrls: ['./liste-accompagnant.component.css']
})
export class ListeAccompagnantComponent implements OnInit {

  constructor() { }
@Input() InputListe:any;
  ngOnInit() {
  }

}
