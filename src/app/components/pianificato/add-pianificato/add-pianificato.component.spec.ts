import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPianificatoComponent } from './add-pianificato.component';

describe('AddPianificatoComponent', () => {
  let component: AddPianificatoComponent;
  let fixture: ComponentFixture<AddPianificatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPianificatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPianificatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
