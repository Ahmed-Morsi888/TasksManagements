import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard';
import { provideTranslocoScope } from '@jsverse/transloco';

export const dashboard_route: Routes = [
  { path: '', component: Dashboard, providers: [provideTranslocoScope(`dashboard`)] },
];
