import { TestBed } from '@angular/core/testing';
import { hot } from 'jest-marbles';
import { when } from 'jest-when';
import { EMPTY, fromEvent } from 'rxjs';
import { StorageListenerService } from '../storage-listener.service';

jest.mock('rxjs', () => {
  const observables = jest.requireActual('rxjs');

  observables.fromEvent = jest.fn(() => EMPTY);

  return observables;
});

describe('StorageListenerService', () => {
  let service: StorageListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageListenerService);

    jest.resetModules();
    jest.resetAllMocks();
  });

  it('should listen for window storage events', () => {
    const event = new StorageEvent('storage');
    const eventObs = hot('e', { e: event });

    when(fromEvent as jest.Mock)
      .calledWith(window, 'storage')
      .mockReturnValueOnce(eventObs);

    expect(service.storage$).toBeObservable(eventObs);
  });
});
