import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  imports: [SharedModule]
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private registerService: RegisterService,
    private swalService: SwalService,
    private router: Router
  ) { 
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  createUser() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      this.registerService.createUser(userData).subscribe({
        next: () => {
         
          this.swalService.success.fire('Usuário criado com sucesso!');
          this.router.navigate(['/']);
        },
        error: () => {
          this.swalService.error.fire('Erro ao criar o usuário!');
        },
      });
    }
  }
}
