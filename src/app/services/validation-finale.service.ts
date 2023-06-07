import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationFinaleService {
  userUrl: string ="http://localhost:3002/users";

  constructor(private httpClient : HttpClient) { }


 // Request : signup Client
  // Response : string

  signupV(obj: any ){
  console.log(obj);
  
    return this.httpClient.post<{message : string}>(`${this.userUrl}/signupV`,obj);
  }

  // Request : login
  // Response : string
  login(userv: any){
    return this.httpClient.post<{msg : String }>(`${this.userUrl}/login`, userv);
  }

   // Request : Edit client
  // Response : string
  editClient(client: any){
    return this.httpClient.put<{message : String}>(this.userUrl, client);
  }
  // Request : Get All clients
  // Response : [{}, {}, {} ...]
  getAllUsers(){
    return this.httpClient.get<{users: any}>(this.userUrl);
  }

  getUserById(id: any){
    return this.httpClient.get<{client : any , message : string}>(`${this.userUrl}/${id}`);

  }

}
