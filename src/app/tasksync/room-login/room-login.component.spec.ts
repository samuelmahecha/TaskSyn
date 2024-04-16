import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RoomLoginComponent } from './room-login.component';

describe('RoomLoginComponent', () => {
  let component: RoomLoginComponent;
  let fixture: ComponentFixture<RoomLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomLoginComponent],
      imports: [FormsModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(RoomLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createRoom on button click', () => {
    spyOn(component, 'createRoom');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.createRoom).toHaveBeenCalled();
  });
  
  it('should call joinRoom on button click', () => {
    spyOn(component, 'joinRoom');
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[1].click();
    expect(component.joinRoom).toHaveBeenCalled();
  });

  // Se puede agregar más pruebas según sea necesario
});
