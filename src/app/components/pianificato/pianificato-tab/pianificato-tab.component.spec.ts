import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianificatoTabComponent } from './pianificato-tab.component';

describe('PianificatoTabComponent', () => {
  let component: PianificatoTabComponent;
  let fixture: ComponentFixture<PianificatoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianificatoTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianificatoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
