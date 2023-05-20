import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('navTo', () => {
    it(`should call router.navigate with the route`, () => {
      const route = '/contact';
      spyOn(component['router'], 'navigate');
      
      component.navTo(route);

      expect(component['router'].navigate).toHaveBeenCalledWith([route]);
    });
  })
});
