import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tamplate-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tamplate-control-flow.component.html',
  styleUrl: './tamplate-control-flow.component.scss'
})
export class TamplateControlFlowComponent {

  public isTrue: boolean = false;

}
