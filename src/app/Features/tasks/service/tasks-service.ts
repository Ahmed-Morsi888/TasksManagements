import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, effect, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
  }

  Alltasks = signal<IallTasks[]>([]);
  dialogeVisible = signal<boolean>(false);
  isUpdateMode = signal<boolean>(false);
  selectedTask = signal<IallTasks | null>(null);

  idTaskUpdate = signal<string>('');
  private http = inject(HttpClient);

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
