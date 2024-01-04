import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tamplate-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tamplate-binding.component.html',
  styleUrl: './tamplate-binding.component.scss'
})
export class TamplateBindingComponent {
  public name = 'Erivaldo Pereira de Santana';
  public age = 37
}
