import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from '@ngx-storage';
@Component({
  selector: 'app-root',
  template: ``,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.localStorage$.subscribe(console.log);
  }
}
