import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../environments/environment';  // Importer la configuration

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app;

  constructor() {
    // Utiliser la configuration Firebase depuis l'environnement
    this.app = initializeApp(environment.firebaseConfig);

    // Si vous utilisez Firebase Analytics
    const analytics = getAnalytics(this.app);
  }
}
