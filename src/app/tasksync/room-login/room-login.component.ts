import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './room-login.component.html',
  styleUrl: './room-login.component.css'
})
export class RoomLoginComponent {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement> | null = null;

  username: string = '';
  roomName: string = '';


  createRoom() {
    // Lógica para crear una nueva sala
    console.log(`Crear sala: ${this.roomName} con usuario: ${this.username}`);
  }

  joinRoom() {
    // Lógica para unirse a una sala existente
    console.log(`Unirse a sala: ${this.roomName} con usuario: ${this.username}`);
  }

  ngAfterViewInit() {
    if (this.canvas) {
      const canvasEl = this.canvas.nativeElement;
      canvasEl.width = 700;
      canvasEl.height = 700;
    }
  }
}
