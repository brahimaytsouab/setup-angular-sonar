import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postList: Post[];

  constructor() {
    this.initializePosts();
  }



  initializePosts() {
    this.postList = [
      {
        id: 1,
        title: 'Mon premier post',
        content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        like: 0,
        dateCreation: new Date()
      },
      {
        id: 2,
        title: 'Mon deuxième post',
        content: 'Ab brevi Septembris brevi Septembris Seres ubi consueta Macedonum Seres sollemnitate et mensis consueta mercatoribus.',
        like: 0,
        dateCreation: new Date()
      },
      {
        id: 3,
        title: 'Mon troisième post',
        content: 'Ferina ignorantes qua vini per et penitus alites ignorantes qua universis per multiplices plerosque universis penitus alites per ignorantes vini.',
        like: 0,
        dateCreation: new Date()
      },
      {
        id: 4,
        title: 'first post',
        content: 'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.',
        like: 0,
        dateCreation: new Date()
      }
    ]

    console.log('===> ', this.postList);
  }

  deletePost(index) {
    this.postList = this.postList.filter(obj => obj.id !== index);
    console.log(this.postList);
    return this.postList;
  }

  reloadPosts() {
    this.initializePosts();
    return this.postList;
  }

  addPost(title: string, content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      like: 0,
      dateCreation: new Date()
    };

    postObject.title = title;
    postObject.content = content;
    postObject.id = this.postList.length > 0 ? this.postList[(this.postList.length - 1)].id + 1 : 0;
    this.postList.push(postObject);
  }
}
