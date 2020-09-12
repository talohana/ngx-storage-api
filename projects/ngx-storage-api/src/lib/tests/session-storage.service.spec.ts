import { TestBed } from '@angular/core/testing';
import { hot } from 'jest-marbles';
import { when } from 'jest-when';
import { EMPTY, fromEvent } from 'rxjs';
import { SessionStorageService } from '../session-storage.service';
import { StorageListenerService } from '../storage-listener.service';

jest.mock('rxjs', () => {
  const observables = jest.requireActual('rxjs');

  observables.fromEvent = jest.fn(() => EMPTY);

  return observables;
});

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageListenerService],
    });
    service = TestBed.inject(SessionStorageService);
  });

  it('sessionStorage$ should emit a StorageEvent', () => {
    const sessionStorageEvent = new StorageEvent('storage', {
      storageArea: sessionStorage,
    });

    const eventsObs = hot('--a--', { a: sessionStorageEvent });

    when(fromEvent as jest.Mock)
      .calledWith(window, 'storage')
      .mockReturnValueOnce(eventsObs);

    expect(service.sessionStorage$).toBeObservable(eventsObs);
  });

  it('sessionStorage$ should filter StorageEvents without storageArea set to sessionStorage', () => {
    const sessionStorageEvent = new StorageEvent('storage', {
      storageArea: sessionStorage,
    });

    const localStorageEvent = new StorageEvent('storage', {
      storageArea: localStorage,
    });

    const eventsObs = hot('-a-b-', {
      a: sessionStorageEvent,
      b: localStorageEvent,
    });

    when(fromEvent as jest.Mock)
      .calledWith(window, 'storage')
      .mockReturnValueOnce(eventsObs);

    const expectedObs = hot('-a---', { a: sessionStorageEvent });

    expect(service.sessionStorage$).toBeObservable(expectedObs);
  });
});
