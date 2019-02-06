import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 

  }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError((error: Response) =>{
          if (error.status === 400) {
            return Observable.throw(new BadInput(error.json()));
          }
          else {
            return Observable.throw(new AppError(error.json()));
          }
        })
      );
  }

  updatePost(post) {
    // 'patch' is update only one part of an object
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));

    // return this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError((error: Response) =>{
          if (error.status === 404 ) {
            return Observable.throw(new NotFoundError());
          } else {
            return Observable.throw( new AppError(error));
          }
        })
      );
      
  }
}
