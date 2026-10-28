import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Perfil } from './components/perfil/perfil';
import { Subordinados } from './components/subordinados/subordinados';

const routes: Routes = [
  
  { path: 'login', component: Login },
  { path: 'perfil', component: Perfil },
  { path: 'subordinados', component: Subordinados },
  

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }