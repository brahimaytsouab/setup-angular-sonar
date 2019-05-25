import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-empty-list-message',
  templateUrl: './empty-list-message.component.html',
  styleUrls: ['./empty-list-message.component.css']
})
export class EmptyListMessageComponent implements OnInit {

  @Output() onReloadClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  reloadPost(): void {
    console.log("HIHO");
    // console.log("===>>> ", this.index);
    // this.postService.deletePost(this.index+1);
    this.onReloadClicked.emit(true);
  }

}
