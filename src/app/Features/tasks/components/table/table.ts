import { IallTasks, TasksService } from '../../../../services/tasks-service';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AddButton } from '../../../../Core/buttons/add-button/add-button';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-table',
  imports: [TableModule, ButtonModule, DialogModule, InputTextModule, AddButton, NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit {
  private Tasks_Service = inject(TasksService);
  allTasks = this.Tasks_Service.Alltasks;
  form = this.Tasks_Service.addTaskForm;
  selectedProducts!: IallTasks[];
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  deleteItem(id: string) {
    this.Tasks_Service.deleteData(id).subscribe({
      next: () => this.allTasks.update((prev) => prev.filter((data) => data.id !== id)),
    });
  }
  update(form: IallTasks) {
    this.Tasks_Service.isUpdateMode.set(true);
    this.Tasks_Service.idTaskUpdate.set(form.id);
    this.Tasks_Service.selectedTask.set(form);
    this.Tasks_Service.dialogeVisible.set(true);
  }

  ngOnInit() {
    this.Tasks_Service.getAllTasks();
  }
}
