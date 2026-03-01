import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit } from '@angular/core';
import { TasksService } from '../../../../services/tasks-service';
import { CardItem } from '../../pages/dashboard';

export interface Idata {
  headertext: string;
  fottertextLeftL: string;
  fottertextright: string;
}
@Component({
  selector: 'app-card-body',
  imports: [NgClass],
  templateUrl: './card-body.html',
  styleUrl: './card-body.css',
})
export class CardBody implements OnInit {
  http = inject(HttpClient);
  tasksService = inject(TasksService);
  leftIcon = input<boolean>(true);
  rightIcon = input<boolean>(true);
  footerTextIcon = input<boolean>(true);
  data = input<Idata[]>([]);
  classes = input<string>('');
  stylebox = input<string>('');

  type = input<'tasks' | 'projects'>('tasks');
  items = input<CardItem[]>([]);

  ngOnInit(): void {}

  dateLabel = input<string>('Date');
}
