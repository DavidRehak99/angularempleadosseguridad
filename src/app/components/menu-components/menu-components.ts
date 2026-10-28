import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-components',
  standalone: false,
  styleUrl: './menu-components.css',
  templateUrl: './menu-components.html',
})
export class MenuComponents {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  cerrarSesion(): void {
    this._authService.cerrarSesion();
    alert("Sesión cerrada correctamente");
    this._router.navigate(['/login']);
  }
}