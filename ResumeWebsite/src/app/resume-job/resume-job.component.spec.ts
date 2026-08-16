import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeJobComponent } from './resume-job.component';

describe('ResumeJobComponent', () => {
  let component: ResumeJobComponent;
  let fixture: ComponentFixture<ResumeJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
