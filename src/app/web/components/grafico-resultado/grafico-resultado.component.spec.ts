import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoResultadoComponent } from './grafico-resultado.component';

describe('GraficoResultadoComponent', () => {
  let component: GraficoResultadoComponent;
  let fixture: ComponentFixture<GraficoResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
