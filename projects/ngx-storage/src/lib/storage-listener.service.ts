import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageListenerService {
  get storage$(): Observable<StorageEvent> {
    return new Observable(subs => {
      const handler = (event: StorageEvent) => subs.next(event);

      window.addEventListener('storage', handler);

      return () => window.removeEventListener('storage', handler);
    });
  }
}
