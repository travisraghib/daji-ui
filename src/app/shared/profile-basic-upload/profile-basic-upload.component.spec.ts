import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserUploadComponent } from './profile-basic-upload.component';

describe('ProfileUserUploadComponent', () => {
  let component: ProfileUserUploadComponent;
  let fixture: ComponentFixture<ProfileUserUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUserUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
