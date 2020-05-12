import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanComponent } from './roman.component';
import { FormsModule } from '@angular/forms';

describe('RomanComponent', () => {
  let component: RomanComponent;
  let fixture: ComponentFixture<RomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ RomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
