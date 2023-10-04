import {Component, OnInit} from '@angular/core';
import {ForumQuestion} from "../../models/ForumQuestion";
import {ForumQuestionService} from "../../public/shared/services/forum-question.service";

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit{

  forumQuestions:ForumQuestion[]=[]
  isAddQuestion = false

  constructor(private _forumQService:ForumQuestionService) {
  }

  ngOnInit(): void {
    this._forumQService.getAll().subscribe((data:any)=>{
      this.forumQuestions=data
    })
  }

  changeIsAddQuestion(){
    this.isAddQuestion = !this.isAddQuestion
  }


  protected readonly navigator = navigator;
}
