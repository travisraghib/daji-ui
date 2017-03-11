import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { FirebaseService } from '../../../service/firebase/firebase.service';

import { CROPPER_OPTIONS } from '../../../app.constants';

declare var Cropper :any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private cropper;
  private selectedImage;
  private file;
  private showCroppedImage;
  
  constructor(
    private firebaseService : FirebaseService
  ) { }

  ngOnInit() {}
  
  handleImageSelect(event, imgRef){
    const URL = window.URL;
    this.file = event.srcElement.files[0];
    this.selectedImage = URL.createObjectURL(this.file);
    imgRef.src = this.selectedImage;
    this.cropper = new Cropper(imgRef, CROPPER_OPTIONS) ;
  }
  
  cropImage(){
    this.cropper.getCroppedCanvas().toBlob(function (blob) {
      console.log(blob)
    });
    
  }
}
