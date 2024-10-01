import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
    taskArray = [{taskName: 'Task 1', completed: false}, {taskName: 'Task 2', completed: false}];

    constructor() { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
      console.log(form);

      this.taskArray.push({taskName: form.value.task, completed: false});

      form.reset();
    }

    onCheck(index: number){
      this.taskArray[index].completed = !this.taskArray[index].completed;
    }

    onDelete(index: number){
      this.taskArray.splice(index, 1);
    }

}
