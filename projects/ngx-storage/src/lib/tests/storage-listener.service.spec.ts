import { TestBed } from '@angular/core/testing';
import { StorageListenerService } from '../storage-listener.service';

describe('StorageListenerService', () => {
  let service: StorageListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
