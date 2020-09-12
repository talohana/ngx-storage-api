import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StorageProxy } from './storage-proxy';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends StorageProxy {
  constructor(private readonly storageListenerService) {
    super(sessionStorage);
  }

  get sessionStorage$(): Observable<StorageEvent> {
    return this.storageListenerService.storage$.pipe(
      filter(({ storageArea }) => storageArea === localStorage)
    );
  }
}
