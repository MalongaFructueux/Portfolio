import { Component, AfterViewInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Project } from './projet.model';
import { ProjectService } from './project.service.ts.service'; // Import corrigé

// Interface pour les compétences
interface Skill {
  nom: string;
  icon: string;
  progress: number;
  description?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements AfterViewInit {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  formSubmitted: boolean = false;
  formSuccess: boolean = false;
  isLoading: boolean = false;
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedProjectCategory: string = 'all';
  technicalSkills: Skill[] = [];
  frameworkSkills: Skill[] = [];
  otherSkills: Skill[] = [];

  competences = [
    {
      titre: 'Front-end',
      items: [
        { nom: 'HTML', icon: 'assets/icon/html.png', progress: 0.9 },
        { nom: 'CSS', icon: 'assets/icon/css-3.png', progress: 0.9 },
        { nom: 'JavaScript', icon: 'assets/icon/js.png', progress: 0.7 },
        { nom: 'React', icon: 'assets/icon/icons8-react-native-50.png', progress: 0.4 },
        { nom: 'Angular', icon: 'assets/icon/icons8-angularjs-50.png', progress: 0.7 },
        { nom: 'Ionic', icon: 'assets/icon/icons8-ionique-50.png', progress: 0.85 },
        { nom: 'Angular Materials', icon: 'assets/icon/icons8-angularjs-50.png', progress: 0.8 },
        { nom: 'Tailwind CSS', icon: 'https://img.icons8.com/nolan/64/tailwind_css.png', progress: 0.8 },
        { nom: 'Bootstrap', icon: 'https://img.icons8.com/color/50/bootstrap--v2.png', progress: 0.8 },

      ],
    },
    {
      titre: 'Back-end',
      items: [
        { nom: 'Node.js', icon: 'assets/icon/icons8-nœud-js-50.png', progress: 0.6 },
        { nom: 'PHP', icon: 'assets/icon/icons8-php-64.png', progress: 0.7 },
        { nom: 'Python', icon: 'assets/icon/icons8-python-50.png', progress: 0.6 },
      ],
    },
    {
      titre: 'Base de données',
      items: [
        { nom: 'MySQL', icon: 'assets/icon/icons8-mysql-50.png', progress: 0.8 },
        { nom: 'Oracle', icon: 'assets/icon/icons8-oracle-50.png', progress: 0.6 },
        { nom: 'Firebase', icon: 'assets/icon/icons8-firebase-50.png', progress: 0.8 },
      ],
    },
    {
      titre: 'Administration réseaux',
      items: [
        { nom: 'Linux', icon: 'assets/icon/logo-linux.png', progress: 0.7 },
        { nom: 'Windows', icon: 'assets/icon/Windows 8.png', progress: 0.8 },
        { nom: 'Virtualisation', icon: 'assets/icon/icons8-lecteur-vmware-workstation-player-50.png', progress: 0.8 },
        { nom: 'CyberSécurité', icon: 'assets/icon/icons8-kali-linux-100.png', progress: 0.8 },
        { nom: 'Documentation', icon: 'assets/icon/icons8-document-120.png', progress: 0.7 },
        { nom: 'Réseaux', icon: 'assets/icon/adresse-ip.png', progress: 0.8 },
      ],
    },
    {
      titre: 'Web-Design',
      items: [
        { nom: 'Photoshop', icon: 'assets/icon/Adobe Photoshop.png', progress: 0.8 },
        { nom: 'Illustrator', icon: 'assets/icon/Adobe Illustrator.png', progress: 0.7 },
        { nom: 'Premier Pro', icon: 'assets/icon/Adobe Premiere Pro.png', progress: 0.7 },
        { nom: 'After Effects', icon: 'assets/icon/After Effects.png', progress: 0.7 },
        { nom: 'Figma', icon: 'assets/icon/figma.png', progress: 0.7 },
        { nom: 'Blender', icon: 'assets/icon/icons8-blender-3d-48.png', progress: 0.7 },
      ],
    },
    {
      titre: 'Ingénierie du son',
      items: [
        { nom: 'Cubase', icon: 'https://img.icons8.com/nolan/64/cubase.png', progress: 0.7 },
        { nom: 'FL Studio', icon: 'https://img.icons8.com/color/50/fl-studio.png', progress: 0.8 },
      ],
    },
  ];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.filteredProjects = this.projects;
    this.distributeSkills();
  }

  // Répartir les compétences
  distributeSkills(): void {
    const technical = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'Python', 'MySQL', 'Oracle', 'Firebase'];
    const frameworks = ['React', 'Angular', 'Ionic', 'WordPress', 'Angular Materials', 'Tailwind CSS', 'Bootstrap' ];

    this.competences.forEach(category => {
      category.items.forEach(skill => {
        if (technical.includes(skill.nom) && this.technicalSkills.length < 6) {
          this.technicalSkills.push({ ...skill, description: this.getSkillDescription(skill.nom) });
        } else if (frameworks.includes(skill.nom) && this.frameworkSkills.length < 6) {
          this.frameworkSkills.push({ ...skill, description: this.getSkillDescription(skill.nom) });
        } else {
          this.otherSkills.push({ ...skill, description: this.getSkillDescription(skill.nom) });
        }
      });
    });
  }

  // Descriptions des compétences
  getSkillDescription(skillName: string): string {
    const descriptions: { [key: string]: string } = {
      HTML: 'Maîtrise avancée',
      CSS: 'Styles complexes',
      JavaScript: 'Programmation dynamique',
      'Node.js': 'Serveurs performants',
      PHP: 'Applications backend',
      Python: 'Scripts automatisés',
      MySQL: 'Gestion de bases relationnelles',
      Oracle: 'Bases de données d’entreprise',
      Firebase: 'Applications en temps réel',
      React: 'Composants réactifs',
      Angular: 'Applications robustes',
      Ionic: 'Apps hybrides',
      WordPress: 'Sites dynamiques',
      Linux: 'Administration système',
      Windows: 'Gestion des serveurs',
      Virtualisation: 'Environnements virtuels',
      CyberSécurité: 'Sécurité des systèmes',
      Documentation: 'Rédaction technique',
      Réseaux: 'Configuration réseau',
      Photoshop: 'Retouche d’images',
      Illustrator: 'Design vectoriel',
      'Premier Pro': 'Montage vidéo',
      'After Effects': 'Animations',
      Figma: 'Prototypage UI/UX',
      Blender: 'Modélisation 3D',
      Cubase: 'Production musicale',
      'FL Studio': 'Création audio',
    };
    return descriptions[skillName] || 'Compétence diversifiée';
  }

  // Télécharger le CV
  downloadCV(): void {
    const cvUrl = 'assets/cv/Malonga_Fructueux_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Malonga_Fructueux_CV.pdf';
    link.click();
  }

  // Filtrer les projets
  filterProjects(): void {
    this.filteredProjects = this.selectedProjectCategory === 'all'
      ? this.projects
      : this.projects.filter(project => project.category === this.selectedProjectCategory);
  }

  // Naviguer entre les projets
  navigateProject(direction: 'prev' | 'next', currentProject: Project): void {
    const currentIndex = this.filteredProjects.findIndex(p => p.id === currentProject.id);
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;

    if (newIndex < 0) newIndex = this.filteredProjects.length - 1;
    if (newIndex >= this.filteredProjects.length) newIndex = 0;

    const nextProjectId = this.filteredProjects[newIndex].id;
    this.scrollToSection(`project-${nextProjectId}`);
  }

  // Ouvrir un projet
  openProject(url: string): void {
    window.open(url, '_blank');
  }

  openProjectInNewTab(url: string | undefined): void {
    if (url) window.open(url, '_blank');
  }

  // Défiler vers une section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  // Envoyer le formulaire
  submitForm(): void {
    if (!this.name || !this.email || !this.subject || !this.message) {
      alert('Veuillez remplir tous les champs obligatoires !');
      return;
    }

    this.isLoading = true;

    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      subject: this.subject,
      message: this.message,
    };

    emailjs
      .send('service_q6ngzw1', 'template_vutrjrm', templateParams, '3FNGOJ-xJImI3jDFe')
      .then(
        response => {
          console.log('Email envoyé avec succès !', response.status, response.text);
          this.formSubmitted = true;
          this.formSuccess = true;
          this.resetForm();
        },
        error => {
          console.error('Échec de l’envoi de l’email :', error);
          this.formSubmitted = true;
          this.formSuccess = false;
        }
      )
      .finally(() => {
        this.isLoading = false;
      });
  }

  // Réinitialiser le formulaire
  resetForm(): void {
    setTimeout(() => {
      this.formSubmitted = false;
      this.formSuccess = false;
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }, 3000);
  }

  // Ouvrir les mentions légales
  openLegalTerms(): void {
    alert('Mentions légales : Ce site est créé par Malonga Fructueux. Tous droits réservés.');
  }

  // Animations avec IntersectionObserver optimisé
  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    const options: IntersectionObserverInit = {
      threshold: 0.2, // Déclenche à 20% de visibilité
      rootMargin: '0px 0px -10% 0px', // Anticipe l'entrée
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add('visible');
          target.classList.remove('hidden');
          // Optionnel : désactiver l'observer après la première apparition
          // observer.unobserve(target);
        }
        // Pas de réinitialisation à la sortie pour éviter les saccades
      });
    }, options);

    sections.forEach(section => {
      section.classList.add('hidden');
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(section);
    });
  }
  
}