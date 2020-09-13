<p align="center">
    <img width="50%" height="50%" src="https://raw.githubusercontent.com/talohana/ngx-storage-api/master/logo.svg"></img>
</p>

<hr />

[![Build Status](https://travis-ci.com/talohana/ngx-storage-api.svg?branch=master)](https://travis-ci.com/talohana/ngx-storage-api)
![Codecov](https://img.shields.io/codecov/c/github/talohana/ngx-storage-api)
![npm](https://img.shields.io/npm/dw/ngx-storage-api)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-storage-api)
![NPM](https://img.shields.io/npm/l/ngx-storage-api)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

`ngx-storage-api` is a simple wrapper above `localStorage` and `sessionStorage` in a shape of Angular services.

Play with a live demo [in this stackblitz](https://stackblitz.com/edit/ngx-storage-api)

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
import { LocalStorageService, SessionStorageService } from 'ngx-storage-api';

@Component({
  selector: 'app-my-component',
  template: ``,
  styles: [],
})
export class MyComponent implements OnInit {
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
