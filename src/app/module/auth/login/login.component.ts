import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/shared/interfaces/login';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService, private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData: Login = this.loginForm.value;
      this.authService.login(loginData).subscribe(
        (response) => {
          // Redireccionar a la página de dashboard si el inicio de sesión es exitoso
          this.router.navigate(['/dashboard']); // Reemplaza '/dashboard' con la ruta de tu dashboard
        },
        (error) => {
          // Manejar errores de inicio de sesión
          console.error(error);
        }
      );
    }
  }
}