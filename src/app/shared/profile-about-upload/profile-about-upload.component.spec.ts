import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutUploadComponent } from './profile-about-upload.component';

describe('ProfileAboutUploadComponent', () => {
  let component: ProfileAboutUploadComponent;
  let fixture: ComponentFixture<ProfileAboutUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAboutUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAboutUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
