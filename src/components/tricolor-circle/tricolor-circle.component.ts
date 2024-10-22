import { Component, Input } from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'sk3dp-tricolor-circle',
  standalone: true,
  templateUrl: './tricolor-circle.component.html',
  imports: [
    NgStyle
  ],
  styleUrls: [ './tricolor-circle.component.scss' ]
})
export class TricolorCircleComponent {
  @Input() colors: string = '';

  getCircleStyle() {
    const colorsArray = this.colors.includes(',')
      ? this.colors.split(',').map(color => color.trim())
      : [this.colors.trim()];

    const totalColors = colorsArray.length;

    if (totalColors === 1) {
      return { '--gradient': `${colorsArray[0]} 0% 100%` };
    }

    const percentageStep = 100 / totalColors;
    let gradientStops = colorsArray.map((color, index) => {
      const start = index * percentageStep;
      const end = (index + 1) * percentageStep;
      return `${color} ${start}% ${end}%`;
    }).join(', ');

    return { '--gradient': gradientStops };
  }
}
