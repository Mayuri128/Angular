import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //equality 
  it('should be 2 + 2 = 4', () => {
    expect(2+2).toBeTruthy();
    expect(2+2).toBe(4);
    expect(3 === 3).toBeTruthy();
    expect(3 == 3).toBeTruthy();
  });
  it('Object value', ()=>{
    const data  = {name:'Aadinath'};
    expect(data).toBe( {"name": "Aadinath"});
  });

});
