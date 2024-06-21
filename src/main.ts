import { bootstrapApplication } from '@angular/platform-browser';
import { mainConfig } from './config.main';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, mainConfig)
  .catch((err) => console.error(err));
