import { TestBed } from '@angular/core/testing';
import { SessionStorageService } from '../session-storage.service';
import { StorageListenerService } from '../storage-listener.service';

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageListenerService],
    });
    service = TestBed.inject(SessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
