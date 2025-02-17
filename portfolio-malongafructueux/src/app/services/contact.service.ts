import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessage {
  nom: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  envoyerMessage(message: ContactMessage): Observable<any> {
    // Remplacer par votre API d'envoi d'emails
    return this.http.post('/api/contact', message);
  }
}