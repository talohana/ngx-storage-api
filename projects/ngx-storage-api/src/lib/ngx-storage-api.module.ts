import { ModuleWithProviders, NgModule } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';

@NgModule({})
export class NgxStorageApiModule {
  static forRoot(): ModuleWithProviders<NgxStorageApiModule> {
    return {
      ngModule: NgxStorageApiModule,
      providers: [LocalStorageService, SessionStorageService],
    };
  }
}
