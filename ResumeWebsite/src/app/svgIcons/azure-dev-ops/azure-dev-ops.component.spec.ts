import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureDevOpsComponent } from './azure-dev-ops.component';

describe('AzureDevOpsComponent', () => {
  let component: AzureDevOpsComponent;
  let fixture: ComponentFixture<AzureDevOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureDevOpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureDevOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
