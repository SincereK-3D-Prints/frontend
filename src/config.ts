import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withRouterConfig } from '@angular/router';
import { routes } from './routes';

export const config: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(
      routes,
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
        onSameUrlNavigation: 'reload',
        urlUpdateStrategy: 'eager',
        canceledNavigationResolution: 'replace'
      })
    ),
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
};
