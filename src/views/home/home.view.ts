import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'shop-home',
  standalone: true,
  imports: [BadgeModule, ButtonModule, DividerModule, InputTextModule, RippleModule, StyleClassModule],
  templateUrl: './home.view.html',
  styleUrl: './home.view.scss'
})
export class HomeView {

}
