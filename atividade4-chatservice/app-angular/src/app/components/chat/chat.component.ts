import { NavbarComponent } from './../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ChatService } from './../../services/chat.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  title = 'app-chat';
  public mensagens: string[] = [];
  public novaMensagem: string = '';

  constructor(private ChatService: ChatService) {
    this.ChatService.receberMensagem().subscribe((mensagem: string) => {
      console.log('Mensagem recebida do hub:', mensagem);
      this.mensagens.push(mensagem);
    });
  }

  enviarMensagem() {
    this.ChatService.enviarMensagem(this.novaMensagem);
    this.novaMensagem = '';
  }
}
