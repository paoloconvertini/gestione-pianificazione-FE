import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianificatolistComponent } from './pianificatolist.component';

describe('PianificatolistComponent', () => {
  let component: PianificatolistComponent;
  let fixture: ComponentFixture<PianificatolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianificatolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianificatolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
