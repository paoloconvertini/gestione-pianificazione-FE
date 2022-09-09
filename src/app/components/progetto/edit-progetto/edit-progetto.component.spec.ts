import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgettoComponent } from './edit-progetto.component';

describe('EditProgettoComponent', () => {
  let component: EditProgettoComponent;
  let fixture: ComponentFixture<EditProgettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProgettoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
