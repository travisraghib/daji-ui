import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { NavService } from '../../service/nav/nav.service';
import { FirebaseService } from '../../service/firebase/firebase.service';
import { ImageUploadService } from '../../service/image/image-upload.service';
import { CROPPER_OPTIONS } from '../../app.constants';

import { ProfileUploadComponent } from '../profile-upload/profile-upload.component'

declare var Cropper :any;

@Component({
  selector: 'app-profile-photo-upload',
  templateUrl: './profile-photo-upload.component.html',
  styleUrls: ['./profile-photo-upload.component.scss']
})
export class ProfilePhotoUploadComponent extends ProfileUploadComponent {
  private URL = window.URL;
  private file;
  private blob;
  private cropper;
  private selectedImage;
  private croppedImage;
  private forceCrop;
  
  constructor(
    location : Location,
    navService : NavService,
    private router: Router,
    private changeDetector : ChangeDetectorRef,
    private firebaseService : FirebaseService,
    private imageUploadService : ImageUploadService
  ) {
    super(navService, location);
  }

  handleImageSelect(event, imgRef){
    this.file = event.srcElement.files[0];
    this.selectedImage = this.URL.createObjectURL(this.file);
    
    imgRef.src = this.selectedImage;
    
    this.cropper = new Cropper(imgRef, CROPPER_OPTIONS) ;
  }
  
  handleCancelImageSelect(){
    this.file = null;
    this.selectedImage = null;
    this.cropper.destroy();
  }
  
  handleCropImage(imgRef){
    this.cropper.getCroppedCanvas().toBlob((blob) =>{
      this.cropper.destroy();
      this.croppedImage = this.URL.createObjectURL(blob);
      this.blob = blob;
      
      imgRef.src = this.croppedImage;
      
      this.changeDetector.detectChanges();
    });
  }
  
  handleCancelCrop(imgRef){
    this.croppedImage = null;
    this.selectedImage = this.URL.createObjectURL(this.file);
    
    imgRef.src = this.selectedImage;
    
    this.cropper = new Cropper(imgRef, CROPPER_OPTIONS) ;
  }
  
  handleUploadImage(){
    this.imageUploadService.upload(this.blob)
      .then(res => {
        console.log(res)
        this.router.navigate(['/profile/create/user']);
      })
      .catch(err => console.log(err));
  }
}
