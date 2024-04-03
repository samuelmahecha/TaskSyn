import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/tasksync/app.config';
import { AppComponent } from './app/tasksync/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
