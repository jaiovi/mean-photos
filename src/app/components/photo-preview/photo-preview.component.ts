import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit{

  id!: string;
  photo!: Photo;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private photoService: PhotoService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.photoService.getPhoto(this.id).subscribe({
          next: (res: any) => this.photo = res,
          error: (e) => console.log(e)
        })
      }
    })
  }

  deletePhoto(id: string){
    this.photoService.deletePhoto(id).subscribe({
      next: (res: any) => {
        console.log(res),
        this.router.navigate(['/photos'])
      },
      error: (e:any) => console.log(e)
    })
  }

  updatePhoto(title: HTMLInputElement, description:HTMLTextAreaElement): boolean {
    this.photoService.updatePhoto(this.id, title.value, description.value).subscribe({
      next: (res: any) => {
        console.log(res),
        this.router.navigate(['/photos'])
      },
      error: (e:any) => console.log(e)
    })
    return false;
  }



}
