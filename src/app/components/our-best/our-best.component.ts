import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-best',
  templateUrl: './our-best.component.html',
  styleUrls: ['./our-best.component.css']
})
export class OurBestComponent implements OnInit {
  infos: any = [
    { title: "The Health", date: "22/01/2023", description: "Health, according to the World Health Organization, is a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity", image: "assets/images/services-img-01.jpg" },
    { title: "The Company Woman", date: "23/01/2023", description: "Women are ambitious and hardworking. They're more inclusive and empathetic leaders. And they want to work for companies that are prioritizing ", image: "assets/images/services-img-02.jpg" },
    { title: "The Education", date: "26/01/2023", description: "Education is the learning and development of intellectual, moral and physical faculties, the means and the results of this development activity.", image: "assets/images/services-img-03.jpg" },
    { title: "The Cleaning", date: "27/01/2023", description: "Cleaning is the process of removing unwanted substances, such as dirt, infectious agents, and other impurities, from an object or environment", image: "assets/images/services-img-04.jpg" },
    { title: "The Building", date: "29/01/2023", description: "Un building - de l'anglais build, construire - est un immeuble de très grande hauteur, moderne, la plupart du temps occupé par des bureaux", image: "assets/images/services-img-05.jpg" },
    { title: "The Daily Worker", date: "31/01/2023", description: "Health, according to the World Health Organization, is a state of complete physical, mental and social well-being and not merely the absence of disease and infirmity", image: "assets/images/services-img-06.jpg" },

  ];

  constructor() { }

  ngOnInit() {
  }

}
