import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos:any[]=[];
  
  constructor(private photoService:PhotoService, private router:Router){}
  
  ngOnInit(): void {
      this.photoService.getPhotos().subscribe({
        next:(v:any[])=>this.photos=v,
        error:(e:any)=>console.log(e)
      })
  }

  selectCard(id:string){
    this.router.navigate(['/photos', id]);
  }
}
