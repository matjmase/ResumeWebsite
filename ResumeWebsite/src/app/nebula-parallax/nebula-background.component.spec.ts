import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebulaParallaxComponent } from './nebula-background.component';

describe('NebulaParallaxComponent', () => {
  let component: NebulaParallaxComponent;
  let fixture: ComponentFixture<NebulaParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NebulaParallaxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NebulaParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
