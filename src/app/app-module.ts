import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core'; // <-- Eliminado 'Service' de aquí
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './components/login/login';
import { Perfil } from './components/perfil/perfil';
import { Subordinados } from './components/subordinados/subordinados';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';
import { MenuComponents } from './components/menu-components/menu-components';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [App, Subordinados, MenuComponents, Login, Perfil],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, provideBrowserGlobalErrorListeners(), ServiceEmpleados],
  bootstrap: [App],
})
export class AppModule {}