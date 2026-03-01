import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TasksService } from '../../../../services/tasks-service';
@Component({
  selector: 'app-add-project-button',
  imports: [ButtonModule, DialogModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-project-button.html',
  styleUrl: './add-project-button.css',
})
export class AddProjectButton {
  addProjectForm: FormGroup = new FormGroup({
    projectName: new FormControl('', Validators.required),
    createAt: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
  });
  label = input('');
  tasksService = inject(TasksService);

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  onSubmit(addProjectForm: FormGroup) {
    if (this.addProjectForm.valid) {
      this.tasksService.addProject(addProjectForm.value).subscribe({
        next: () => {
          console.log('added successfuly');
          this.visible = false;
          this.addProjectForm.reset();
        },
      });
    }
  }
}
