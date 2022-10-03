import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianificatoRowComponent } from './pianificato-row.component';

describe('PianificatoRowComponent', () => {
  let component: PianificatoRowComponent;
  let fixture: ComponentFixture<PianificatoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianificatoRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianificatoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
