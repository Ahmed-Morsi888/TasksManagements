import { IallTasks } from './../../../tasks/service/tasks-service';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit, signal } from '@angular/core';

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
  leftIcon = input<boolean>(true);
  rightIcon = input<boolean>(true);
  footerTextIcon = input<boolean>(true);
  data = input<Idata[]>([]);
  classes = input<string>('');
  stylebox = input<string>('');

  allTasks = signal<IallTasks[]>([]);
  ngOnInit(): void {
    this.getTasks();
  }
  getTasks() {
    this.http.get<IallTasks[]>(`http://localhost:3000/allTasks`).subscribe({
      next: (res) => {
        this.allTasks.set(res);
      },
    });
  }
}
