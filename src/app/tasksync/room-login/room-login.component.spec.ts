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
  it('should update username and roomName on user input', () => {
    component.username = 'testUser';
    component.roomName = 'testRoom';
    fixture.detectChanges();
    expect(component.username).toEqual('testUser');
    expect(component.roomName).toEqual('testRoom');
  });
  it('should call createRoom on button click', () => {
    spyOn(component, 'createRoom');
    const button = fixture.nativeElement.querySelector('button#createRoomButton'); // Assuming you have a button with this id
    button.click();
    expect(component.createRoom).toHaveBeenCalled();
  });
  
  it('should call joinRoom on button click', () => {
    spyOn(component, 'joinRoom');
    const button = fixture.nativeElement.querySelector('button#joinRoomButton'); // Assuming you have a button with this id
    button.click();
    expect(component.joinRoom).toHaveBeenCalled();
  });
  it('should call ngAfterViewInit', () => {
    spyOn(component, 'ngAfterViewInit');
    fixture.detectChanges();
    expect(component.ngAfterViewInit).toHaveBeenCalled();
  });
      

});
