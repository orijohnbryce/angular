import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  public generate(count: number): Observable<number> {
    // every 0.5 sec, report new random number

    return new Observable((observer: Observer<number>) => {
      try {        
        const iid = setInterval(() => {
          const num = Math.random();
          observer.next(num);   // as promise.resolve
          count--;
          if (count === 0) {
            observer.complete();   // as promise.resolve (After all)
            clearInterval(iid);
          }
        }, 500);
      } catch (error: any) {
        observer.error(error)  // as promise.reject
      }
    });
  }
}
