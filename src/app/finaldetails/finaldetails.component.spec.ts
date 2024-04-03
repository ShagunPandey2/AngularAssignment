import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaldetailsComponent } from './finaldetails.component';

describe('FinaldetailsComponent', () => {
  let component: FinaldetailsComponent;
  let fixture: ComponentFixture<FinaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinaldetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
