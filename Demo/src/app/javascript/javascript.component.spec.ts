import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { JavascriptComponent } from './javascript.component';

describe('JavascriptComponent', () => {
  let component: JavascriptComponent;
  let fixture: ComponentFixture<JavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptComponent,RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
