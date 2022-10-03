import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianificatoSommarioComponent } from './pianificato-sommario.component';

describe('PianificatoSommarioComponent', () => {
  let component: PianificatoSommarioComponent;
  let fixture: ComponentFixture<PianificatoSommarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianificatoSommarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianificatoSommarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
