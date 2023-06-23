import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Assistance } from '../core/interfaces/assistance';

@Injectable({
  providedIn: 'root'
})
export class AssistanceService {

  constructor(private http: HttpClient){ }

  askAssistance(sseUrl: string, assistance : Assistance){
    const httpOptions : Object = {
      responseType: 'text'
    };
    return this.http.post<any>(sseUrl, assistance, httpOptions);
  }
}
