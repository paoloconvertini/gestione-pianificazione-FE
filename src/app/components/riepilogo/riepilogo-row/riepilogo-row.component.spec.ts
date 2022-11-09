import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoRowComponent } from './riepilogo-row.component';

describe('RiepilogoRowComponent', () => {
  let component: RiepilogoRowComponent;
  let fixture: ComponentFixture<RiepilogoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiepilogoRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiepilogoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
