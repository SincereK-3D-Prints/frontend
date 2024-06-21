import { Component } from '@angular/core';

@Component({
  selector: 'shop-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year: string = new Date().getFullYear().toString();

}
