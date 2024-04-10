import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksyncComponent } from './tasksync.component';
import { RoomLoginComponent } from './room-login/room-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , TasksyncComponent, RoomLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasksync';
}
