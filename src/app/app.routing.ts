import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SListDetailsComponent } from './slistDetails/slistdetails.component';

const routes: Routes = [
  { path: 'slist/login', component: LoginComponent }, { path: '', redirectTo: '/slist/login', pathMatch: 'full' },
  { path: 'slist/logout', component: LoginComponent },
  //,{path:'slist/',redirectTo:'/slist/login',pathMatch:'full'},
  { path: 'slist/contact', component: ContactComponent },
  {
    path: 'slist/home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SListDetailsComponent }

    ]
  },
  { path: 'slist/about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes);
