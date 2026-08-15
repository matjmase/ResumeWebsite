import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialIconComponent } from './angular-material-icon.component';

describe('AngularMaterialIconComponent', () => {
  let component: AngularMaterialIconComponent;
  let fixture: ComponentFixture<AngularMaterialIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterialIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
