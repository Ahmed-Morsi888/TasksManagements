import { IallTasks } from './../../../services/tasks-service';
import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TasksService } from '../../../services/tasks-service';

export interface Istatus {
  name: string;
}
@Component({
  selector: 'app-add-button',
  imports: [ButtonModule, DialogModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-button.html',
})
export class AddButton {
  label = input('');
  form = input<string>('');

  tasksServic = inject(TasksService);

  visible = this.tasksServic.dialogeVisible;
  updatemode = this.tasksServic.isUpdateMode;
  showDialog() {
    this.visible.set(true);
  }

  http = inject(HttpClient);
  addTask = this.tasksServic.addTaskForm;
  selectedId = this.tasksServic.idTaskUpdate;

  onDialogClose() {
    this.addTask.reset();
  }
  constructor() {
    effect(() => {
      const task = this.tasksServic.selectedTask();
      if (task) {
        this.addTask.patchValue(task);
      }
    });
  }

  udateItem(selectedId: string, form: FormGroup) {
    if (form.valid) {
      this.tasksServic.updateItem(selectedId, form.value).subscribe({
        next: (updateTask) =>
          this.tasksServic.Alltasks.update((tasks) =>
            tasks.map((t) => (t.id === selectedId ? updateTask : t)),
          ),
      });
      this.visible.set(false);
    }
  }

  onSubmit(addTask: FormGroup) {
    this.markAsTouched(addTask);
    if (addTask.valid) {
      if (this.updatemode()) {
        this.tasksServic.updateItem(this.selectedId(), addTask.value).subscribe({
          next: (updateTask) =>
            this.tasksServic.Alltasks.update((tasks) =>
              tasks.map((t) => (t.id === this.selectedId() ? updateTask : t)),
            ),
        });
        this.visible.set(false);
        addTask.reset();
        this.tasksServic.isUpdateMode.set(false);
      } else {
        this.tasksServic.add(addTask.value).subscribe({
          next: (res) => {
            this.tasksServic.Alltasks.update((prev) => [...prev, res]);
            this.visible.set(false);
            addTask.reset();
          },
        });
      }
    }
  }

  markAsTouched(addTask: FormGroup) {
    Object.values(addTask.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markAsTouched(control);
      }
    });
  }
}
