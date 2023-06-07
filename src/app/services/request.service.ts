import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requUrl: string ="http://localhost:3002/requests";

  constructor( private http : HttpClient) { }
  // Request : Add Reserv
  // Response : string
  addReserv(obj: any){
    return this.http.post<{accepter: string , isAdded: boolean}>(this.requUrl, obj);
    }
     // Request : Get All reserv
  // Response : [{}, {}, {} ...]
  getAllReserv(){
    return this.http.get<{allreservation: any}>(this.requUrl);
  }

// Request : Delete response By ID to page admin
  // Response : string
  deleteReponse(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.requUrl}/${id}`);
  }
  
}
