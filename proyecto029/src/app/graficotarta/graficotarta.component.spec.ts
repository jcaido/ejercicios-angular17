import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficotartaComponent } from './graficotarta.component';

describe('GraficotartaComponent', () => {
  let component: GraficotartaComponent;
  let fixture: ComponentFixture<GraficotartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficotartaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficotartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
