import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/shared/services/swal.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [SharedModule]
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private swalSerivce: SwalService,
    private authService: AuthService,

  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.controls['email'] as FormControl;
  }

  get password() {
    return this.loginForm.controls['password'] as FormControl;
  }

  login() {
    if (this.email.value === '' && this.password.value === '') {
      this.swalSerivce.error.fire('Preencha os campos corretamente!');
    }
  
    if (this.email.value === '') {
      this.swalSerivce.error.fire('Preencha o campo email!');
    }
  
    if (this.password.value === '') {
      this.swalSerivce.error.fire('Preencha o campo senha!');
    }
  
    if (this.loginForm.valid) {
      this.authService.login({ email: this.email.value, password: this.password.value }).subscribe({
        next: (response) => {
          console.log(response)
          const token = response.access_token;
          localStorage.setItem('authToken', token);
          this.swalSerivce.success.fire('Login realizado com sucesso!');
          this.router.navigate(['/home']);
        },
        error: () => {
          this.swalSerivce.error.fire('Erro ao realizar o login!');
        },
      });
    } else {
      this.swalSerivce.error.fire('Preencha os campos corretamente!');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']); 
  }
}
