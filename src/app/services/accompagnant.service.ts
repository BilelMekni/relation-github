import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccompagnantService {

accpUrl: string ="http://localhost:3002/accompagnants";
  constructor(private http : HttpClient) { }
  // Request : signup
  // Response : string

  signup(obj: any , img : File , cv: File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("telephone",obj.telephone);
    formData.append("email",obj.email);
    formData.append("pwd",obj.pwd);
    formData.append("adresse",obj.adresse);
    formData.append("experience",obj.experience);
    formData.append("role",obj.role);
    formData.append("gender",obj.gender);
    formData.append("status",obj.status);
    formData.append("img",img);
    formData.append("cv",cv);


    return this.http.post<{message : string , isAdded : boolean}>(`${this.accpUrl}/signup`, formData);

  }
   // Request : login
  // Response : string
  login(accompagnant: any){
    return this.http.post<{msg : String , user:any}>(`${this.accpUrl}/login`, accompagnant);
  }
  // Request : Edit accompagnant
  // Response : string
  editAccp(accp: any){
    return this.http.put(this.accpUrl, accp);
  }
   // Request : Get All accompagnant
  // Response : [{}, {}, {} ...]
  getAllAccps(){
    return this.http.get<{accompts: any}>(this.accpUrl);
  }

  getAccptById(id: any){
    return this.http.get<{accompagnant : any , message : string}>(`${this.accpUrl}/${id}`);
  }

  // Request : Delete accompagnant By ID
  // Response : string
  deleteAccps(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.accpUrl}/${id}`);
  }
  editAccompt(accompt : any){
    
    return this.http.put<{ message: string }>(this.accpUrl, accompt);
}
  
confirmeAccp(id : any){
  return this.http.post<{message: String}>(`${this.accpUrl}/status/${id}`, id);
}

 // Request : Get All confirmation accompagnants
  // Response : [{}, {}, {} ...]
  getAffichage(){
    return this.http.get<{affiche:string}>(`${this.accpUrl}/all/affichage`);
  }

///-------search accompagnants----/////
searchAccompagnants(obj:any){
  return this.http.post<{searchTab: any}>(`${this.accpUrl}/search`,obj)
}

// Request : Delete accompagnant table By ID with admin
  // Response : string
  deleteAccTable(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.accpUrl}/${id}`);
  }

 


}
