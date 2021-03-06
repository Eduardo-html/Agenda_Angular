import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroComponent } from './filtro.component';

describe('FiltoComponent', () => {
  let component: FiltroComponent;
  let fixture: ComponentFixture<FiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
