import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettolistComponent } from './progettolist.component';

describe('ProgettolistComponent', () => {
  let component: ProgettolistComponent;
  let fixture: ComponentFixture<ProgettolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgettolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgettolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
