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
  public condition = this.age > 1 ? 'Teste' : 'Teste2';

  public isDesabled = false;
  public srcValue = "https://vidafullstack.com.br/wp-content/uploads/2022/04/Aprenda-o-que-e-Databinding-com-Angular-1080x675.jpg";

  constructor(){
    setTimeout( ()=>{
      this.name = 'João e Maria';
    }, 1000);
  }
  public sum(val1: number, val2: number){
    return val1 + val2;
  }
}
