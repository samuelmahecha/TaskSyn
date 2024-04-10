import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomLoginComponent } from './room-login.component';

describe('RoomLoginComponent', () => {
  let component: RoomLoginComponent;
  let fixture: ComponentFixture<RoomLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
