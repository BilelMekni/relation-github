import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles : any =[
    {title:"Blog1",avatar:"assets/images/testi_01.png",name :"Salah",date :"11/02/2020" ,image:"assets/images/infh7.jpg",bt1 :"Sante",bt2:"Infirmier",description:"Diplome : Infirmier ,Experiene : 4 ans,Travail: A domicile , Bienvenue"},
    {title:"Blog2",avatar:"assets/images/testi_02.png",name :"Kamel",date :"01/01/2021" ,image:"assets/images/infh6.jpg",bt1 :"Sante",bt2:"Infirmier",description:"Diplome : Infirmier ,Experiene : 3 ans,Travail: A domicile , Bienvenue"},
    {title:"Blog3",avatar:"assets/images/testi_03.png",name :"Ahlem",date :"15/06/2022" ,image:"assets/images/aid3.jpg",bt1 :"Sante",bt2:"Aid Soignante",description:"Diplome : Aid Soignante ,Experiene : 6 ans,Travail: A domicile , Bienvenue"},
    {title:"Blog4",avatar:"assets/images/testi_02.png",name :"Walid",date :"11/02/2023" ,image:"assets/images/infh9.jpg",bt1 :"Sante",bt2:"Infirmier",description:"Diplome : Infirmier ,Experiene : 3 ans,Travail: A domicile , Bienvenue"},
    {title:"Blog5",avatar:"assets/images/testi_03.png",name :"Manel",date :"16/02/2023" ,image:"assets/images/Est1.jpg",bt1 :"Others",bt2:"Escort person",description:"to go with a person or vehicle, especially to make certain that he, she, or it leaves or arrives safely."},
    {title:"Blog6",avatar:"assets/images/testi_03.png",name :"Meriem",date :"02/03/2023" ,image:"assets/images/est2.jpg",bt1 :"Others",bt2:"Escort person",description:"An escort is a person who accompanies another person to a social event. Sometimes people are paid to be escorts."},

  ];

  constructor() { }

  ngOnInit() {
  }

}
