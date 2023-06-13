import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/Photo';
import { PhotoService } from 'src/app/services/photo.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent  {//implements OnInit
  /*
  id!=String;
  photo!:Photo;
  constructor(
    private router : Router,
    private activatedRoute: ActivatedRoute,
    private photoService : PhotoService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.id=params['id'];
        this.photoService.getPhoto(this.id).subscribe({
          next:(res:any)=> this.photo=res, error:(e)=>console.log(e)
        })
      }
    })
    
  }

  deletePhoto(id:string){
    this.photoService.deletePhoto(id).subscribe({
      next:(res:any)=>{
        console.log(res),this.router.navigate(['/photos'])
      },
      error: (e) => console.log(e)
    })
  }

  updatePhoto(titles:HTMLInputElement, descripcion:HTMLTextAreaElement):boolean{
    this.photoService.updatePhoto(this.id, title.value, description.value).subscribe({
      next:(res:any)=>{
        console.log(res),this.router.navigate(['/photos'])
      },
      error: (e) => console.log(e)
    })
    return false;
  }
  */
}
