import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageListenerService {
  readonly storage$: Observable<StorageEvent> = fromEvent<StorageEvent>(
    window,
    'storage'
  ).pipe(shareReplay(1));
}
