import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksyncComponent } from './tasksync.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TasksyncComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasksync';
}
