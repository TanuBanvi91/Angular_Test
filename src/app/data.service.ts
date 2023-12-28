import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}
  
  private apiUrl = 'https://gateway.eu1.mindsphere.io/api/assetmanagement/v3/assets';

  fetchAsset(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.apiUrl, { headers, observe: 'response' });
  }

    


  
}

