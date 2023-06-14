import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/Photo';
import { PhotoService } from 'src/app/services/photo.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit{
  
  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private photoService : PhotoService)
  {

  }  

  id! :string;
  file!:File;
  photoSelected!:ArrayBuffer|null;
  
  photo!:Photo;
  
  ngOnInit():void{
    
  }
  onPhotoSelected(event:any){
    if(event.target.files && event.target.files[0]){
      this.file=event.target.files[0]
      const reader = new FileReader(); //este es el reader que convierte la mafia
      reader.onload = (e:ProgressEvent<FileReader>)=>{
        this.photoSelected = e.target?.result as ArrayBuffer
      };
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title:HTMLInputElement, description:HTMLTextAreaElement): boolean{
    this.photoService.createPhoto(title.value, description.value, this.file)
    .subscribe({
      complete:()=>this.router.navigate(['/photos']),
      error:(e:any)=>console.log(e)
    })

    return false; 

  }

}
