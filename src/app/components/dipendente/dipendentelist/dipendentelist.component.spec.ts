import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipendentelistComponent } from './dipendentelist.component';

describe('DipendentelistComponent', () => {
  let component: DipendentelistComponent;
  let fixture: ComponentFixture<DipendentelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipendentelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DipendentelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
