import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPublicComponent } from './content-public.component';

describe('ContentPublicComponent', () => {
  let component: ContentPublicComponent;
  let fixture: ComponentFixture<ContentPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPublicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
