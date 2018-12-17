import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response =>{
      this.posts = response;
      // console.log(response);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.service.makePost(post)
      .subscribe(response =>{
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
        input.value = '';
      });
  }

  updatePost(post) {
    this.service.modifyPost(post)
      .subscribe(response => {
        console.log(response);
      });
      // this.http.put(this.url, JSON.stringify(post));
  }
  deletePost(post) {
    this.service.removePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }


}
