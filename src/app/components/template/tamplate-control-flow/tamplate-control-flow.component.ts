import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-tamplate-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tamplate-control-flow.component.html',
  styleUrl: './tamplate-control-flow.component.scss'
})
export class TamplateControlFlowComponent {

  public isTrue: boolean = true;
  public switchCondition = 'C';
  public itens = [{ name: 'Erivaldo Santana' }];
  public itens2: Array<{name: string}> = [];
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFn(index: number){
    return index;
  }

  public addNewName(value: string){
    return this.itens.push({ name: value});
  }
}
