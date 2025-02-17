import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormationComponent } from './components/formation/formation.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetsComponent } from './components/projets/projets.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-propos', component: AProposComponent
  },
  {
    path: 'acceuil', component: AcceuilComponent
  },
  {
    path: 'competences', component: CompetencesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'experience', component: ExperienceComponent
  },
  {
    path: 'formation', component: FormationComponent
  },
  {
    path: 'projets', component: ProjetsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
