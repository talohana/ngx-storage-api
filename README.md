<p align="center">
    <img width="50%" height="50%" src="https://raw.githubusercontent.com/talohana/ngx-storage-api/master/logo.svg"></img>
</p>

<hr />

[![Build Status](https://travis-ci.org/talohana/ngx-storage-api.svg?branch=master)](https://travis-ci.org/talohana/ngx-storage-api)

`ngx-storage-api` is a simple wrapper above `localStorage` and `sessionStorage` in a shape of Angular services.

## Installation

To use `ngx-storage-api` in your project install it via npm:

```
npm i ngx-storage-api
```

or using yarn:

```
yarn add ngx-storage-api
```

## Usage

In order to use `localStorage` or `sessionStorage` inject the desired service:

```typescript
import { LocalStorageService } from 'ngx-storage-api';

@Component({
  selector: 'app-my-component',
  template: ``,
  styles: [],
})
export class MyComponentComponent implements OnInit {
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
```
