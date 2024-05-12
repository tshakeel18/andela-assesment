import "reflect-metadata";

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient()
]};
