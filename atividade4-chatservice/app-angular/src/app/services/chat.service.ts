import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubConnection: HubConnection;

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:7182/chat')
      .build();

    this.startConnection();
  }

  private startConnection() {
    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  enviarMensagem(mensagem: string) {
    this.hubConnection.invoke('EnviarMensagem', mensagem)
      .catch(err => console.error(err));
  }

  receberMensagem(): Observable<string> {
    return new Observable<string>(observer => {
      this.hubConnection.on('ReceberMensagem', (mensagem: string) => {
        observer.next(mensagem);
      });
    });
  }
}
