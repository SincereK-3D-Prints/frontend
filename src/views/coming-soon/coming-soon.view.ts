import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'shop-coming-soon',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './coming-soon.view.html',
  styleUrl: './coming-soon.view.scss'
})
export class ComingSoonView {
  subscribed: boolean = false;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]]
  });

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  subscribe() {
    this.http.post('/api/subscribe', this.form.value)
      .subscribe(() => {
        this.subscribed = true;
      });
  }
}
