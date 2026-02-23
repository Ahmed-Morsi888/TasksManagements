import { Routes } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';
import { Notifications } from './pages/notifications';

export const NOTIFICATION_ROUTES: Routes = [
  {
    path: '',
    component: Notifications,
    providers: [provideTranslocoScope(`notifications`)],
  },
];
