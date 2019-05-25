import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() dateCreation: string;
  @Input() like: number;
  @Input() index: number;
  @Input() id: number;
  @Output() onPostDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  likeIt() {
    this.like++;
  }

  unLikeIt() {
    this.like--;
  }

  deletePost(): void {
    // console.log("===>>> ", this.index);
    // this.postService.deletePost(this.index+1);
    this.onPostDeleted.emit(this.id);
  }

}
