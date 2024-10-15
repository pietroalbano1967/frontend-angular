import { Routes } from '@angular/router';
import { GenericComponent } from './generic/generic.component';
import { ElementsComponent } from './elements/elements.component';

export const appRoutes: Routes = [
  { path: '', component: GenericComponent },       // Homepage
  { path: 'generic', component: GenericComponent },
  { path: 'elements', component: ElementsComponent }
];
