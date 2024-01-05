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
    // setTimeout( ()=>{
    //   this.name = 'João e Maria';
    // }, 1000);
  }
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public sum(){
    return this.age++;
  }

  public sub(){
    return this.age--;
  }

  public onKeydown(event: Event){
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent){
    return console.log({
      clietX: event.clientX,
      clietY: event.clientY,
    });
  }

}
