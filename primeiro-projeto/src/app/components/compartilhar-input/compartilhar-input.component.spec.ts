import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilharInputComponent } from './compartilhar-input.component';

describe('CompartilharInputComponent', () => {
  let component: CompartilharInputComponent;
  let fixture: ComponentFixture<CompartilharInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartilharInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompartilharInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
