import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TamplateBindingComponent } from './components/template/tamplate-binding/tamplate-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TamplateControlFlowComponent } from './components/template/tamplate-control-flow/tamplate-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponentComponent,
    TamplateBindingComponent,
    TemplateVariablesComponent,
    TamplateControlFlowComponent
  ],
  template: `
  <h1>Curso de Angular</h1>
  <app-tamplate-control-flow/>

  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
