import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllAccompagnantsService {

  allUrl: string ="http://localhost:3002/allAcompagnants";
  constructor(private httpClient : HttpClient) { }

  // Request : Get All allaccompagnants
  // Response : [{}, {}, {} ...]
  getAllAll(){
    return this.httpClient.get<{allaccomp : any}>(this.allUrl);
    }
    // Request : Get All All accompagnants By ID
  // Response : {}
  getAllAllById(id: any){
    return this.httpClient.get<{match :string,  message : string}>(`${this.allUrl}/${id}`);
  }
   // Request : Edit All Accompagnants
  // Response : string
  editAllAll(obj: any){
    return this.httpClient.put<{message : string}>(this.allUrl, obj);
   }

   


   
}


  
