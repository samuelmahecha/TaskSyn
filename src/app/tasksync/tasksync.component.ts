import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tasksync',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tasksync.component.html',
  styleUrl: './tasksync.component.css'
})
export class TasksyncComponent {
  taskArray = [{taskName: 'Hacer reporte semanal', isCompleted: false, isEditable: false}];

  onSubmit(form: NgForm){
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      isEditable: false
    })

    form.reset();
  }

  onDelete(index: number){
    console.log(index);

    this.taskArray.splice(index, 1);
  }
  onCheck(index: number){
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
  
  onEdit(index: number){
    this.taskArray[index].isEditable = true;
  }
  
  onSave(index: number, newtask: string){
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].isEditable = false;
  }
}
