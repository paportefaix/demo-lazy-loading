import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantTroisComponent } from './enfant-trois.component';

describe('EnfantTroisComponent', () => {
  let component: EnfantTroisComponent;
  let fixture: ComponentFixture<EnfantTroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantTroisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
