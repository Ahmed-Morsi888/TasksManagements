import { Routes } from '@angular/router';
import { Tasks } from './pages/tasks';
import { provideTranslocoScope } from '@jsverse/transloco';
export const TASKS_ROUTES: Routes = [
  { path: '', component: Tasks, providers: [provideTranslocoScope(`tasks`)] },
];
