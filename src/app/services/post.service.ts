import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  makePost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  modifyPost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  removePost(post) {
    return this.http.delete(this.url + '/' + post.id);
  }
}
