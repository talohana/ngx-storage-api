import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StorageListenerService } from './storage-listener.service';
import { StorageProxy } from './storage-proxy';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageProxy {
  constructor(private readonly storageListenerService: StorageListenerService) {
    super(localStorage);
  }

  /**
   * Listens for `localStorage` StorageEvent events
   *
   * @returns
   * An Observable which listens to `window` storage events, and filters
   * those which relevant to `localStorage`
   */
  get localStorage$(): Observable<StorageEvent> {
    return this.storageListenerService.storage$.pipe(
      filter(event => event?.storageArea === localStorage)
    );
  }
}
