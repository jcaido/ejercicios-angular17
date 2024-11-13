import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamultiplicacionComponent } from './tablamultiplicacion.component';

describe('TablamultiplicacionComponent', () => {
  let component: TablamultiplicacionComponent;
  let fixture: ComponentFixture<TablamultiplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablamultiplicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablamultiplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
