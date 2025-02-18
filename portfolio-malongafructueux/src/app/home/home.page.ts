import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,

})
export class HomePage {
  name: string = '';
  email: string = '';
  message: string = '';
  formSubmitted: boolean = false;
  isLoading: boolean = false;


  constructor() { }

  // mes compentences et leur icones dans ma liste
  competences = [
    {
      titre: 'Front-end',
      items: [
        { nom: 'HTML', icon: 'assets/icon/html.png', progress: 0.9 }, // 90% pour HTML
        { nom: 'CSS', icon: 'assets/icon/css-3.png', progress: 0.9 }, // 80% pour CSS
        { nom: 'JavaScript', icon: 'assets/icon/js.png', progress: 0.7 }, // 70% pour JavaScript
        { nom: 'React', icon: 'assets/icon/icons8-react-native-50.png', progress: 0.4 }, // 75% pour React
        { nom: 'Angular', icon: 'assets/icon/icons8-angularjs-50.png', progress: 0.7 }, // 60% pour Angular
        { nom: 'Ionic', icon: 'assets/icon/icons8-ionique-50.png', progress: 0.85 }, // 85% pour Ionic
        { nom: 'WordPress', icon: 'assets/icon/icons8-wordpress-50.png', progress: 0.8 }, // 80% pour WordPress
      ],
    },
    {
      titre: 'Back-end',
      items: [
        { nom: 'Node.js', icon: 'assets/icon/icons8-nœud-js-50.png', progress: 0.6 }, // 70% pour Node.js
        { nom: 'PHP', icon: 'assets/icon/icons8-php-64.png', progress: 0.7 }, // 80% pour PHP
        { nom: 'Python', icon: 'assets/icon/icons8-python-50.png', progress: 0.6 }, // 90% pour Python
      ],
    },
    {
      titre: 'Base de données',
      items: [
        { nom: 'MySQL', icon: 'assets/icon/icons8-mysql-50.png', progress: 0.8 }, // 90% pour MySQL
        { nom: 'Oracle', icon: 'assets/icon/icons8-oracle-50.png', progress: 0.6 }, // 80% pour Oracle
        { nom: 'Firebase', icon: 'assets/icon/icons8-firebase-50.png', progress: 0.8 }, // 80% pour Oracle
      ],
    },
    {
      titre: 'Administration réseaux',
      items: [
        { nom: 'Linux', icon: 'assets/icon/logo-linux.png', progress: 0.7 }, // 85% pour Linux
        { nom: 'Windows', icon: 'assets/icon/Windows 8.png', progress: 0.8 }, // 75% pour Windows Server
        { nom: 'Virtualisation', icon: 'assets/icon/icons8-lecteur-vmware-workstation-player-50.png', progress: 0.8 }, // 70% pour AWS, Docker
        { nom: 'CyberSécurité', icon: 'assets/icon/icons8-kali-linux-100.png', progress: 0.8 }, // 60% pour Nagios
        { nom: 'Documentation', icon: 'assets/icon/icons8-document-120.png', progress: 0.7 }, // 60% pour Nagios
        { nom: 'Réseaux', icon: 'assets/icon/adresse-ip.png', progress: 0.8 }, // 60% pour Nagios
      ],
    },
    {
      titre: 'Web-Design',
      items: [
        { nom: 'Photoshop', icon: 'assets/icon/Adobe Photoshop.png', progress: 0.8 }, // 80% pour Photoshop
        { nom: 'Illustrator', icon: 'assets/icon/Adobe Illustrator.png', progress: 0.7 }, // 70% pour Illustrator
        { nom: 'Premier Pro', icon: 'assets/icon/Adobe Premiere Pro.png', progress: 0.7 }, // 60% pour Premiere Pro
        { nom: 'After Effects', icon: 'assets/icon/After Effects.png', progress: 0.7 }, // 60% pour Premiere Pro
        { nom: 'Figma', icon: 'assets/icon/figma.png', progress: 0.7 }, // 60% pour Premiere Pro
        { nom: 'Blender', icon: 'assets/icon/icons8-blender-3d-48.png', progress: 0.7 }, // 60% pour Premiere Pro

      ],
    },
    {
      titre: 'Ingénierie du son',
      items: [
        { nom: 'Cubase', icon: 'data:image/png;base64,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', progress: 0.7 }, // 85% pour Cubase
        { nom: 'FL Studio', icon: 'data:image/jpeg;base64,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', progress: 0.8 }, // 80% pour FL Studio
      ],
    },
  ];


  // function scroll to section
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



  openProject(url: string) {
    window.open(url, '_blank'); // Ouvre le site dans un nouvel onglet
  }



  // fonction to send message
  submitForm() {
    if (!this.name || !this.email || !this.message) {
      alert('Veuillez remplir tous les champs !');
      return;
    }

    this.isLoading = true;

    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
    };

    emailjs
      .send(
        'service_q6ngzw1',  // Remplace par ton Service ID
        'template_vutrjrm', // Remplace par ton Template ID
        templateParams,
        '3FNGOJ-xJImI3jDFe'      // Remplace par ton User ID
      )
      .then(
        (response) => {
          console.log('Email envoyé avec succès !', response.status, response.text);
          this.formSubmitted = true;
          this.resetForm();
        },
        (error) => {
          console.error('Échec de l\'envoi de l\'email :', error);
          alert('Une erreur s\'est produite, veuillez réessayer.');
        }
      )
      .finally(() => {
        this.isLoading = false;
      });
  }

  resetForm() {
    setTimeout(() => {
      this.formSubmitted = false;
      this.name = '';
      this.email = '';
      this.message = '';
    }, 3000);
  }


  // ANIMATION

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    const options: IntersectionObserverInit = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        } else {
          // Si vous souhaitez faire disparaître l'élément lorsqu'il quitte le viewport :
          target.style.opacity = '0';
          target.style.transform = 'translateY(50px)';
        }
      });
    }, options);

    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });
  }


}
