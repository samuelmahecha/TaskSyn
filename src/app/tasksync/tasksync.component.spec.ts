import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksyncComponent } from './tasksync.component';

describe('TasksyncComponent', () => {
  let component: TasksyncComponent;
  let fixture: ComponentFixture<TasksyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksyncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
