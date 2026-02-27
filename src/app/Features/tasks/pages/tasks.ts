import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { Table } from '../components/table/table';

@Component({
  selector: 'app-tasks',
  imports: [Table],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
