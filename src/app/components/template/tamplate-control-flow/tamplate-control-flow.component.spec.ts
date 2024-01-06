import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamplateControlFlowComponent } from './tamplate-control-flow.component';

describe('TamplateControlFlowComponent', () => {
  let component: TamplateControlFlowComponent;
  let fixture: ComponentFixture<TamplateControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TamplateControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamplateControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
