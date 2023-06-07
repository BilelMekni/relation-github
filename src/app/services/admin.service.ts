import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUrl: string ="http://localhost:3002/admin";

  constructor(private httpClient : HttpClient) { }
  // Request : signup Admin
  // Response : string
  signup(obj: any , img : File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("telephone",obj.telephone);
    formData.append("email",obj.email);
    formData.append("pwd",obj.pwd);
    formData.append("confirmPwd",obj.confirmPwd);
    formData.append("adresse",obj.adresse);
    formData.append("role",obj.role);
    formData.append("gender",obj.gender);
    formData.append("img",img);
    return this.httpClient.post<{message : string}>(`${this.adminUrl}/signup`, formData);
  }


   ///---get all admi----////
   getAllAdmin(){
    return this.httpClient.get<{admin: any}>(this.adminUrl);
  }

  
  getAdminById(id: any){
    return this.httpClient.get<{admin : any , message : string}>(`${this.adminUrl}/${id}`);
  }
   // Request : Delete clients By ID
  // Response : string
  deleteAdmin(id: any){
    return this.httpClient.delete<{isDeleted : boolean}>(`${this.adminUrl}/${id}`);
  }
  
  

}
