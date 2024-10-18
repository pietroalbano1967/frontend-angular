// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenericComponent } from './generic/generic.component';
import { ElementsComponent } from './elements/elements.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },  // Homepage (attualmente HomeComponent)
  { path: 'generic', component: GenericComponent },  // Pagina Generic
  { path: 'elements', component: ElementsComponent },  // Pagina Elements
  { path: '**', redirectTo: '' }  // Rotta di fallback per gestire rotte non trovate
];