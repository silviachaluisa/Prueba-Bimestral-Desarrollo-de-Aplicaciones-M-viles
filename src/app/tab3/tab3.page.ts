import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number = 0;
b: number = 0;
c: number = 0;
roots: any;

calculateRoots() {
  const discriminant = Math.pow(this.b, 2) - 4 * this.a * this.c;

  if (discriminant > 0) {
    // Raíces reales distintas
    const root1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
    const root2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
    this.roots = [root1, root2];
  } else if (discriminant === 0) {
    // Raíces reales iguales
    const root = -this.b / (2 * this.a);
    this.roots = [root, root];
  } else {
    // Raíces complejas
    const realPart = -this.b / (2 * this.a);
    const imaginaryPart = Math.sqrt(-discriminant) / (2 * this.a);
    this.roots = [`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`];
  }
}
}
