import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '../local-storage.service';
import { StorageListenerService } from '../storage-listener.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageListenerService],
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
