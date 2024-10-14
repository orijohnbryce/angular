import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { MyFirstComponentComponent } from './app/components/my-first-component/my-first-component.component';
import { LayoutComponent } from './app/components/layout/layout.component';

bootstrapApplication(LayoutComponent, appConfig)
  .catch((err) => console.error(err));
