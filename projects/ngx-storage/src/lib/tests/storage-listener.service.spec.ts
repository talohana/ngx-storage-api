import { TestBed } from '@angular/core/testing';
import { StorageListenerService } from '../storage-listener.service';

describe('StorageListenerService', () => {
  let service: StorageListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageListenerService);
  });

  it('should listen for window storage events', () => {
    fail();
  });

  it('should keep single subscription to storage events', () => {
    fail();
  });
});
