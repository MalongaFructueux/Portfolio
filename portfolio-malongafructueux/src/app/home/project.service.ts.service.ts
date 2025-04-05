import { Injectable } from '@angular/core';
import { Project } from './projet.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: '4', // ID unique requis
      title: 'Maquette Site web de musique',
      category: 'web', // Ajouté pour le filtrage
      client: 'Projet personnel', // Ajouté
      duration: '1 mois', // Ajouté
      problem: 'Créer une interface utilisateur pour un site de streaming musical', // Ajouté
      role: 'Développeur front-end', // Ajouté
      methodology: ['Design responsive', 'Prototypage Figma', 'HTML/CSS'], // Ajouté
      results: 'Maquette fonctionnelle avec navigation fluide', // Ajouté
      technologies: ['HTML', 'CSS'], // Ajouté
      imageUrl: 'assets/conductor-5507703_640.jpg',
      codeUrl: 'https://github.com/MalongaFructueux/maquette-site-de-musique.git',
      viewUrl: 'https://malongafructueux.github.io/maquette-site-de-musique/',
    },
    {
      id: '3', // ID unique requis
      title: 'Maquette Site web restaurant',
      category: 'web', // Ajouté pour le filtrage
      client: 'Projet personnel', // Ajouté
      duration: '1 mois', // Ajouté
      problem: 'Concevoir un site pour un restaurant avec menu interactif', // Ajouté
      role: 'Designer et développeur', // Ajouté
      methodology: ['Wireframing', 'Développement front-end', 'Tests utilisateurs'], // Ajouté
      results: 'Site visuellement attrayant et facile à utiliser', // Ajouté
      technologies: ['HTML', 'CSS', 'JavaScript'], // Ajouté
      imageUrl: 'assets/img1.jpg',
      codeUrl: 'https://github.com/MalongaFructueux/maquette-restaurant.git',
      viewUrl: "https://malongafructueux.github.io/maquette-restaurant/",
    },
    {
      id: '2', // ID unique requis
      title: 'Mon Portfolio',
      category: 'web', // Ajouté pour le filtrage
      client: 'Projet personnel', // Ajouté
      duration: '1 mois', // Ajouté
      problem: 'Présenter mes compétences et projets de manière professionnelle', // Ajouté
      role: 'Développeur full-stack', // Ajouté
      methodology: ['Angular', 'Ionic', 'Gestion de projet'], // Ajouté
      results: 'Portfolio responsive et interactif', // Ajouté
      technologies: ['Angular', 'Ionic', 'TypeScript', 'Firebase'], // Ajouté
      imageUrl: 'assets/Monportfolio.png',
      codeUrl: 'https://github.com/MalongaFructueux/Portfolio.git',
      viewUrl: 'https://mon-portfolio---malonga.web.app/home',
    },
    {
      id: '1', // ID unique requis
      title: 'YkaBrazza',
      category: 'mobile', // Ajouté pour le filtrage (ou 'web' si pertinent)
      client: 'Projet personnel', // Ajouté
      duration: '4 mois', // Ajouté
      problem: "Concevoir un site web d'annonces", // Ajouté
      role: 'Développeur ', // Ajouté
      methodology: ['Programmation orientée objet', 'Tests unitaires'], // Ajouté
      results: 'Scripts fonctionnels pour diverses applications', // Ajouté
      technologies: ['Ionic', 'Angular', 'Firebase'], // Ajouté
      imageUrl: 'assets/icon/imgpub.jpeg',
      viewUrl: 'https://yakatovanda.web.app',
    }
    ] ;
      getProjects(): Project[] {
        return this.projects;
      }
    }