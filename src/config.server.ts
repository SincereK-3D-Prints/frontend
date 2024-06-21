import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { mainConfig } from './config.main';

const config: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const serverConfig = mergeApplicationConfig(mainConfig, config);
