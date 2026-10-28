import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  public username: string = "";
  public password: string = "";

  constructor(
    private _service: AuthService,
    private _router: Router
  ) {}

  realizarLogin(): void {
    this._service.login(this.username, this.password).subscribe(response => {
      // Guardamos el token recibido en el localStorage
      localStorage.setItem("token", response.response);
      console.log("Token guardado correctamente");
      
      // Redirigimos al perfil o a la página principal
      this._router.navigate(["/perfil"]);
    });
  }
}