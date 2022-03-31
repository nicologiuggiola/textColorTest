import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelperService } from '../helper.service';

import { PageTwoComponent } from './page-two.component';

describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;
  let service: HelperService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PageTwoComponent,
        { provide: HelperService }
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(PageTwoComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    service = new HelperService()
    component = new PageTwoComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a color in string format', () => {
    component.selectColor("red")
    expect(service.color).toBe('red');
  });
  
});
