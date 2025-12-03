import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { Footer } from './app/components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, RouterOutlet],
  template: `
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes)],
}).catch(err => console.error(err));
