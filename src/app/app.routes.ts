import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: {title: 'Home-Liu'} },
  { path: 'about', component: AboutComponent, data: {title: 'About-Liu'} },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent, data: {title: 'GitHub List'} },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent, data: {title: 'Repo'} },
          { path: ':repo', component: RepoDetailComponent, data: {title: 'RepoDetail'} }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent, data: {title: 'Contact-Liu'} }
];

