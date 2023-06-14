import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Photo } from '../interfaces/Photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  URI= 'http://localhost:3500/api/photos/'

  constructor(private http:HttpClient) { }

  createPhoto(title:string, description:string, photo:File){
    if(photo.size>30000000){
      alert('tamanio de la img muy grande')
    }
    const fd = new FormData;
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(this.URI,fd)
  }

  getPhotos(){
    return this.http.get<Photo[]>(this.URI)
  }

  getPhoto<Photo>(id: string){
    return this.http.get(this.URI + id);
  }

  deletePhoto(id: string){
    return this.http.delete(this.URI + id);
  }

  updatePhoto(id :string, title: string, description: string){
    return this.http.put(this.URI + id, { title, description });
  }
}
