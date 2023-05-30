import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkLogoComponent } from './social-network-logo.component';

describe('SocialNetworkLogoComponent', () => {
  let component: SocialNetworkLogoComponent;
  let fixture: ComponentFixture<SocialNetworkLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialNetworkLogoComponent]
    });
    fixture = TestBed.createComponent(SocialNetworkLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
