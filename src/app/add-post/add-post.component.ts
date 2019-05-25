import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostsService} from "../services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // test: string = 'booom';

  constructor(private postService: PostsService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.postService.addPost(form.value.title, form.value.content);
    this.router.navigate(['/posts']);
    console.log(form.value);

  }

}
