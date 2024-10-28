import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'sk3dp-tricolor-circle',
  standalone: true,
  imports: [ NgStyle, NgClass ],
  templateUrl: './tricolor-circle.component.html',
  styleUrls: ['./tricolor-circle.component.scss']
})
export class TricolorCircleComponent {
  @Input() active: boolean = false;
  @Input() colors: string = '';

  getCircleStyle() {
    if (this.colors === 'rainbow sparkle') {
      this.colors = 'red,orange,yellow,green,blue,indigo,violet';
    }


    const colorsArray = this.colors.includes(',')
      ? this.colors.split(',').map(color => {
        switch (color) {
          case 'copper':
            return '#B87333';
          default:
            return color.trim();
        }
      })
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
