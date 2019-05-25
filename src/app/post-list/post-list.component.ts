import { Component, OnInit } from '@angular/core';
import {PostsService} from "../services/posts.service";
import {Post} from "../models/post.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostsService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.posts = this.postService.postList;
  }

  updateAfterDelete($event) {
    console.log("===>>> sss", $event);
    this.posts = this.postService.deletePost($event);
    this.toastrService.success("Post " + $event + " supprimé", 'Success');
  }

  reloadPosts() {
    console.log('!!!!1');
    this.posts = this.postService.reloadPosts();
  }

}
