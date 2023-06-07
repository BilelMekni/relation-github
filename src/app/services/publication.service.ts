import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

publUrl: string ="http://localhost:3002/publications";
  constructor( private httpClient:HttpClient) { }
  // Request : Add Publication
  // Response : string
  addPublication(obj: any){
    return this.httpClient.post<{message: string, isAdded: boolean}>(this.publUrl, obj);
    }
    // Request : Edit Publication
  // Response : string
  editPublication(obj: any){
    return this.httpClient.put<{message : string}>(this.publUrl, obj);
   }
   // Request : Get All Publications
  // Response : [{}, {}, {} ...]
  getAllPublications(){
    return this.httpClient.get<{publications : any}>(`${this.publUrl}/all`);
    }
    // Request : Get Publication By ID
  // Response : {}
  getPublicationById(id: any){
    return this.httpClient.get<{pubs :string}>(`${this.publUrl}/${id}`);
  }
  // Request : Delete  all  Publication By ID widh admin
  // Response : string
  deletePublication(id: any){
    return this.httpClient.delete<{isDeleted : boolean}>(`${this.publUrl}/${id}`);
  }
/// confirme publications (all publications)////
  confirmePublication(id : any){
    return this.httpClient.post<{message : String}>(`${this.publUrl}/status/${id}`, id)
  }

   // Request : Get All confirmation Publications
  // Response : [{}, {}, {} ...]
  // consulter publications /////
  getConfirmPublications(){
    return this.httpClient.get<{pubs : any}>(`${this.publUrl}`);
    }

   // Request : Get All notifications
  // Response : [{}, {}, {} ...]
 // notification consulter publications//////
  postNotif(obj: any) {
    return this.httpClient.put<{ message: string }>(`${this.publUrl}/post/notif/active`, obj);
  }


  getAffichageListe(){
    return this.httpClient.get<{affiche : any}>(`${this.publUrl}/all/aff`);
  }


  
}
