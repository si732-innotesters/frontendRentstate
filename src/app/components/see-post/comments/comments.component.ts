import {Component, Input} from '@angular/core';
import {CommentPost} from "../../../models/CommentPost";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  @Input() comments: CommentPost[] = [];
}
