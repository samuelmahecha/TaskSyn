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
  textInput: string = '';


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
      const canvas = this.canvas.nativeElement;
      canvas.width = 700;
      canvas.height = 700;
      const ctx = canvas.getContext('2d');
  
      if (ctx) {
        // Área de herramientas
        const toolsWidth = 200;
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, toolsWidth, canvas.height);
  
        // Dibujar formas
        ctx.fillStyle = '#000000';
        const shapeSize = 30;
        const shapeSpacing = 50;
        let x = 20, y = 20;
  
        // Formas geométricas
        const shapes = [
          () => ctx.fillRect(x, y, shapeSize, shapeSize * 0.6), // Rectángulo
          () => {
            ctx.beginPath();
            ctx.arc(x + shapeSize / 2, y + shapeSize / 2, shapeSize / 2, 0, 2 * Math.PI);
            ctx.fill();
          }, // Círculo
          () => {
            ctx.beginPath();
            ctx.moveTo(x, y + shapeSize);
            ctx.lineTo(x + shapeSize / 2, y);
            ctx.lineTo(x + shapeSize, y + shapeSize);
            ctx.closePath();
            ctx.fill();
          }, // Triángulo
          // ... agrega más formas aquí si lo deseas
        ];
  
        shapes.forEach((drawShape, i) => {
          drawShape();
          y += shapeSpacing;
        });
  
        y += 20;
  
        // Dibujar emojis
        ctx.font = '30px Arial';
        const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '🤩', '🥳', '😎', '🤠', '🥺', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥱', '😤', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🥳', '🥴', '🤯', '🤠', '🥳', '🥳', '😎', '🤓', '🧐', '😕', '😟', '😥', '😪', '🤤', '😻', '😼', '🙀', '😿', '😹', '😸', '😺', '😽'];
        const emojiSize = 30;
        const maxEmojisPerRow = Math.floor((toolsWidth - 40) / emojiSize);
        let emojiX = 20, emojiY = y;
  
        for (let i = 0; i < emojis.length; i++) {
          ctx.fillText(emojis[i], emojiX, emojiY);
          emojiX += emojiSize;
          if ((i + 1) % maxEmojisPerRow === 0) {
            emojiX = 20;
            emojiY += emojiSize;
          }
        }
      }
    }
}}
