import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  listes: any =[
    {title:"Issam Houimli",date:"22/01/2023",description:"Infermie",info:"je suis infermie experimente et mon age 23 ans , et je suis disponible a tous moments",image:"assets/images/portfolio-img-01.jpg",images:"assets/images/issam.jpg"},
    {title:"Hamdi Hasni",date:"31/01/2023",description:"Medecin",info:"Médecin polyvalent qui accueille tout patient, en exerçant la médecine générale (ou médecine généraliste)",image:"assets/images/portfolio-img-02.jpg",images:"assets/images/hamdi.jpg"},
    {title:"Ahlem Mejri",date:"02/02/2023",description:"Aide Soignant",info:"Personne qui participe aux soins et au bien-être des patients en collaboration avec l’infirmier.",image:"assets/images/portfolio-img-03.jpg",images:"assets/images/ahlem.jpg"},
    {title:"Karima Trabelsi",date:"10/02/2023",description:"Sage Femme",info:"Personne dont le métier est de surveiller la grossesse et d'assister les femmes lors de l'accouchement",image:"assets/images/portfolio-img-04.jpg",images:"assets/images/karima.jpg"},
    {title:"Hiba Marzouk",date:"01/03/2023",description:"Infermier",info:"Femme qui panse des malades selon les ordres d'un médecin au sein d'un établissement médical ou au domicile d'un patient.",image:"assets/images/portfolio-img-03.jpg",images:"assets/images/maroua.jpg"},
    {title:"Salah Ben ALI",date:"15/02/2023",description:"Autres",info:"On peut alors le remplacer par « n'importe quelle ». Toute autre personne se serait réjouie. N'importe quelle autre personne se serait réjouie",image:"assets/images/portfolio-img-05.jpg",images:"assets/images/portfolio-img-05.jpg"},
    
   ];

  constructor() { }

  ngOnInit() {
  }

}
