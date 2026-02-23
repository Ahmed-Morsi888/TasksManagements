import { Routes } from '@angular/router';
import { WrapperLayout } from './layout/wrapper-layout/wrapper-layout';

export const routes: Routes = [
  {
    path: '',
    component: WrapperLayout,

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: `full`,
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import(`./Features/dashboard/dashboard.routes`).then((m) => m.dashboard_route),
      },
      {
        path: 'emails',
        loadChildren: () => import(`./Features/emails/emails.routes`).then((m) => m.EMAIL_ROUTES),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import(`./Features/notifications/notification.routes`).then((m) => m.NOTIFICATION_ROUTES),
      },
      {
        path: 'tasks',
        loadChildren: () => import(`./Features/tasks/tasks.routes`).then((m) => m.TASKS_ROUTES),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import(`./Features/projects/projects.routes`).then((m) => m.PROJECTS_ROUTES),
      },
      {
        path: 'calender',
        loadChildren: () =>
          import(`./Features/calenders/calender.routes`).then((m) => m.CALENDER_ROUTES),
      },
    ],
  },
];
