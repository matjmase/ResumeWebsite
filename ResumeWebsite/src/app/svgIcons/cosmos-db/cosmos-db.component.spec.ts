import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmosDbComponent } from './cosmos-db.component';

describe('CosmosDbComponent', () => {
  let component: CosmosDbComponent;
  let fixture: ComponentFixture<CosmosDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmosDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmosDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
