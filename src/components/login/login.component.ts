import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'casa-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatIcon,
    MatButton,
    MatIconButton,
    MatError,
    MatLabel
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;
  hidePassword = true;
  mode = 'login';

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', Validators.required ]
    });
  }

  facebookLogin() {
    this.auth.facebookLogin();
  }

  googleLogin() {
    this.auth.googleLogin();
  }

  submitAction() {
    switch (this.mode) {
      case 'signup':
        return this.auth.signup(this.form.value);
      case 'forgot':
        return this.auth.forgot(this.form.value);
      case 'login':
      default:
        return this.auth.login(this.form.value);
    }
  }

  submitMessage() {
    switch (this.mode) {
      case 'signup':
        return 'Successfully signed up!';
      case 'forgot':
        return 'Password reset email sent!';
      case 'login':
      default:
        return 'Successfully logged in!';
    }
  }

  submit() {
    if (this.form.valid) {
      this.submitAction()
        .subscribe((data: any) => {
          if (data && data.token) {
            localStorage.setItem('token', data.token);
          }
          this.auth.redirect();
          this.snackBar.open(this.submitMessage(), 'Close', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        });
    }
  }

  signup() {
    this.mode = this.mode !== 'signup' ? 'signup' : 'login';
    if (!this.form.contains('password')) {
      this.addPasswordField();
    }
    this.mode === 'signup' ? this.addConfirmPasswordField() : this.removeConfirmPasswordField();
  }

  forgot() {
    this.mode = this.mode !== 'forgot' ? 'forgot' : 'login';
    this.mode === 'forgot' ? this.removePasswordField() : this.addPasswordField();
  }

  addConfirmPasswordField() {
    this.form.addControl('confirmPassword', new FormControl('', Validators.required));
    this.form.setValidators(this.passwordMatchValidator as any);
    this.form.updateValueAndValidity();
  }

  removeConfirmPasswordField() {
    this.form.removeControl('confirmPassword');
    this.form.clearValidators();
    this.form.updateValueAndValidity();
  }

  addPasswordField() {
    this.form.addControl('password', new FormControl('', Validators.required));
    this.form.setValidators(this.passwordMatchValidator as any);
    this.form.updateValueAndValidity();
  }

  removePasswordField() {
    this.form.removeControl('password');
    this.form.clearValidators();
    this.form.updateValueAndValidity();
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }
}
