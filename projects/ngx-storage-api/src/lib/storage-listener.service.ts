import { Injectable } from '@angular/core';
import { defer, fromEvent, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageListenerService {
  /**
   * Listen to window storage events.
   *
   * @returns
   * An Observable which listens to window storage events,
   * shared to add a single handler to window object
   */
  readonly storage$: Observable<StorageEvent> = defer(() =>
    fromEvent<StorageEvent>(window, 'storage').pipe(share())
  );
}
