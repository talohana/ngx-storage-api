import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-storage-api';
@Component({
  selector: 'app-root',
  template: `<img src="/assets/logo.svg" />`,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.clear();
    this.localStorageService.setItem('hello', 'world');
    this.localStorageService.getItem('hello');
    this.localStorageService.removeItem('hello');
    this.localStorageService.localStorage$.subscribe((e: StorageEvent) => {
      console.log('localStorage changed!', e);
    });
  }
}
