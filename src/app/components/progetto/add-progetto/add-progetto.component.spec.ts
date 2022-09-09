import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgettoComponent } from './add-progetto.component';

describe('AddProgettoComponent', () => {
  let component: AddProgettoComponent;
  let fixture: ComponentFixture<AddProgettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProgettoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProgettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
