import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ParceirosComponent } from './components/pages/parceiros/parceiros.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { ServicesComponent } from './components/pages/services/services.component';


const routes: Routes = [
  {path: ' ', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'parceiros', component: ParceirosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
