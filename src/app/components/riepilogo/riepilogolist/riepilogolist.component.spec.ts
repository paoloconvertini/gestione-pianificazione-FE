import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogolistComponent } from './riepilogolist.component';

describe('RiepilogolistComponent', () => {
  let component: RiepilogolistComponent;
  let fixture: ComponentFixture<RiepilogolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiepilogolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiepilogolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
