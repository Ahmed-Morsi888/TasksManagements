import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, OnInit, computed } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, shareReplay, tap } from 'rxjs';

export interface IallTasks {
  id: string;
  description: string;
  taskName: string;
  duration: string;
  priority: string;
  createAt: string;
  dueDate: string;
  status: string;
}
export interface IallProjects {
  id: string;
  projectName: string;
  duration: string;
  priority: string;
  createAt: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService implements OnInit {
  addTaskForm: FormGroup = new FormGroup({
    taskName: new FormControl('', Validators.required),
    description: new FormControl(``, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
    duration: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    createAt: new FormControl('', Validators.required),
    dueDate: new FormControl(''),
  });

  ngOnInit() {
    this.getAllTasks();
    this.loadProjects();
  }

  Alltasks = signal<IallTasks[]>([]);

  private allProjects = signal<IallProjects[]>([]);

  projects = computed(() => this.allProjects());

  dialogeVisible = signal<boolean>(false);
  isUpdateMode = signal<boolean>(false);
  selectedTask = signal<IallTasks | null>(null);

  idTaskUpdate = signal<string>('');
  private http = inject(HttpClient);

  // <<<<<< rojects Api>>>>>>>>>>>
  loadProjects() {
    this.http
      .get<IallProjects[]>(`http://localhost:3000/projects`)
      .subscribe({ next: (res) => this.allProjects.set(res) });
  }

  refreshProjects() {
    this.loadProjects();
  }

  addProject(data: IallProjects): Observable<IallProjects> {
    return this.http
      .post<IallProjects>(`http://localhost:3000/projects`, data)
      .pipe(tap(() => this.refreshProjects()));
  }

  // <<<<<< rojects Api>>>>>>>>>>>

  add(data: IallTasks): Observable<IallTasks> {
    return this.http.post<IallTasks>(`http://localhost:3000/allTasks`, data);
  }
  deleteData(id: string): Observable<IallTasks> {
    return this.http.delete<IallTasks>(`http://localhost:3000/allTasks/${id}`);
  }

  getAllTasks() {
    this.http.get<IallTasks[]>(`http://localhost:3000/allTasks`).subscribe({
      next: (res) => this.Alltasks.set(res),
    });
  }

  updateItem(id: string, data: IallTasks): Observable<IallTasks> {
    return this.http.put<IallTasks>(`http://localhost:3000/allTasks/${id}`, data);
  }
}
