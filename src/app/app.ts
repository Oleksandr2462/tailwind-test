import { TodoItem } from './../../../lesson1/src/app/app';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // todoList: TodoItem[] = [];
  // newTask: string = '';
  // toggleCompleted: any;
  // DeleteTask: any;
  // addTask(): void {
  //   if (this.newTask.trim() !== '') {
  //     const newTodoItem: TodoItem = {
  //       task: this.newTask,
  //       completed: false,
  //       id: 0,
  //     }
  //     this.todoList.push(newTodoItem)
  //     this.newTask = '';
  //   }
  // }
  // toggleComleted(index: number): void {
  //   this.todoList[index].completed = !this.todoList[index].completed
  // }
  // deleteTask(id: number): void {
  //   this.todoList = this.todoList.filter(item => item.id !== id);
  // }
  // deleteallRows() {
  //   this.todoList = [];
  // }
}
