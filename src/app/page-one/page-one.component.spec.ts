import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelperService } from '../helper.service';

import { PageOneComponent } from './page-one.component';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;
  let service: HelperService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneComponent, { provide: HelperService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(PageOneComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    service = new HelperService()
    component = new PageOneComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a color in string format', () => {
    component.text = "red"
    component.onClickSave()
    expect(service.text).toBe('red');
  });
});
