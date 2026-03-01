import { TasksService } from './../../../services/tasks-service';
import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { HeaderDashboard } from '../components/header-dashboard/header-dashboard';
import { HeaderCard } from '../components/header-card/header-card';
import { CardBody } from '../components/card-body/card-body';

export interface CardItem {
  title: string;
  date: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [HeaderDashboard, HeaderCard, CardBody],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  ngOnInit(): void {
    this.TasksService.getAllTasks();
    this.TasksService.loadProjects();
  }

  TasksService = inject(TasksService);
  allTasks = this.TasksService.Alltasks;
  allProjects = this.TasksService.projects;

  taskCards = computed(() =>
    this.allTasks().map((t) => ({
      title: t.taskName,
      date: t.dueDate,
    })),
  );

  projectCards = computed(() =>
    this.allProjects().map((p) => ({
      title: p.projectName,
      date: p.createAt,
    })),
  );
}
