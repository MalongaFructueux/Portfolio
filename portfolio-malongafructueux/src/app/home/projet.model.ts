// modele de projet

// src/app/home/projet.model.ts
export interface Project {
    id: string;            // Identifiant unique du projet
    title: string;         // Titre du projet
    category: string;      // Catégorie (ex. 'web', 'mobile')
    client: string;        // Client pour lequel le projet a été réalisé
    duration: string;      // Durée du projet (ex. "3 mois")
    problem: string;       // Problématique du projet
    role: string;          // Rôle dans le projet
    methodology: string[]; // Liste des méthodes utilisées
    results: string;       // Résultats obtenus
    technologies: string[];// Technologies utilisées
    imageUrl?: string;     // URL de l'image (optionnelle)
    viewUrl?: string;      // URL pour voir le projet (optionnelle)
    codeUrl?: string;      // URL du code source (optionnelle)
  }