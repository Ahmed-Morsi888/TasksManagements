import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-tasks',
  imports: [TranslocoDirective],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
