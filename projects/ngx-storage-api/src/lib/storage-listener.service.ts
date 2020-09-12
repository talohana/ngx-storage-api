import { Injectable } from '@angular/core';
import { defer, fromEvent, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageListenerService {
  readonly storage$: Observable<StorageEvent> = defer(() =>
    fromEvent<StorageEvent>(window, 'storage').pipe(shareReplay(1))
  );
}
