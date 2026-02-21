import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-emails',
  imports: [TranslocoDirective],
  templateUrl: './emails.html',
  styleUrl: './emails.css',
})
export class Emails {}
