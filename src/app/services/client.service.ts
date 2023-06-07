import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl: string ="http://localhost:3002/clients";

  constructor( private httpClient : HttpClient) { }
  // Request : signup Client
  // Response : string

  signup(obj: any , img : File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("telephone",obj.telephone);
    formData.append("email",obj.email);
    formData.append("pwd",obj.pwd);
    formData.append("adresse",obj.adresse);
    formData.append("role",obj.role);
    formData.append("gender",obj.gender);
    formData.append("status",obj.status);
    formData.append("img",img);
    return this.httpClient.post<{message : string}>(`${this.clientUrl}/signup`, formData);
  }

  // Request : login
  // Response : string
  login(client: any){
    return this.httpClient.post<{msg : String , user:any}>(`${this.clientUrl}/login`, client);
  }

   // Request : Edit client
  // Response : string
  editClient(client: any){
    return this.httpClient.put(this.clientUrl, client);
  }
  // Request : Get All clients
  // Response : [{}, {}, {} ...]
  getAllClients(){
    return this.httpClient.get<{clients: any}>(this.clientUrl);
  }

  getClientById(id: any){
    return this.httpClient.get<{client : any , message : string}>(`${this.clientUrl}/${id}`);
  }
  // Request : Delete clients By ID
  // Response : string
  deleteClients(id: any){
    return this.httpClient.delete<{isDeleted : boolean}>(`${this.clientUrl}/${id}`);
  }
  confirmeClient(id : any){
    return this.httpClient.post<{message : String}>(`${this.clientUrl}/status/${id}`, id)
  }

   ///---espace client----/////
   getEspaceAll(){
    return this.httpClient.get<{matches : any}>(`${this.clientUrl}`)
  }


  ///------ getall acommpagnant from clients--////
  getAllAccompagnant(){
    return this.httpClient.get<{accompts:any}>(`${this.clientUrl}`);
  }

}
