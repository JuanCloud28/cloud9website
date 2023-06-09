import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor() { }

  observeMessages(sseUrl: string): Observable<string> {
    return new Observable<string>(obs => {
      const es = new EventSource(sseUrl);
      es.addEventListener('message', (evt) => {
        console.log(evt.data);
        obs.next(evt.data);
      });
      return () => es.close();
    });
  }
}
