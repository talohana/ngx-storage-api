import { TestBed } from '@angular/core/testing';
import { hot } from 'jest-marbles';
import { when } from 'jest-when';
import { EMPTY, fromEvent } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';
import { StorageListenerService } from '../storage-listener.service';

jest.mock('rxjs', () => {
  const observables = jest.requireActual('rxjs');

  observables.fromEvent = jest.fn(() => EMPTY);

  return observables;
});

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageListenerService],
    });
    service = TestBed.inject(LocalStorageService);

    jest.resetModules();
    jest.resetAllMocks();
  });

  it('localStorage$ should emit a StorageEvent', () => {
    const localStorageEvent = new StorageEvent('storage', {
      storageArea: localStorage,
    });

    const eventsObs = hot('--a--', { a: localStorageEvent });

    when(fromEvent as jest.Mock)
      .calledWith(window, 'storage')
      .mockReturnValueOnce(eventsObs);

    expect(service.localStorage$).toBeObservable(eventsObs);
  });

  it('localStorage$ should filter StorageEvents without storageArea set to localStorage', () => {
    const localStorageEvent = new StorageEvent('storage', {
      storageArea: localStorage,
    });

    const sessionStorageEvent = new StorageEvent('storage', {
      storageArea: sessionStorage,
    });

    const eventsObs = hot('-a-b-', {
      a: localStorageEvent,
      b: sessionStorageEvent,
    });

    when(fromEvent as jest.Mock)
      .calledWith(window, 'storage')
      .mockReturnValueOnce(eventsObs);

    const expectedObs = hot('-a---', { a: localStorageEvent });

    expect(service.localStorage$).toBeObservable(expectedObs);
  });
});
