import { Component } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-notifications',
  imports: [TranslocoDirective],
  templateUrl: './notifications.html',
})
export class Notifications {}
