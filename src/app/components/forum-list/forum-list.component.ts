import {Component, OnInit} from '@angular/core';
import {ForumQuestion} from "../../models/ForumQuestion";
import {ForumQuestionService} from "../../public/shared/services/forumservice/forum-question.service";
import {Message} from "../../models/Message";
import {UserService} from "../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit{

  userId!:number
  forumQuestions:ForumQuestion[]=[]
  isAddQuestion = false
  writtenQuestion:string=""
  constructor(private _forumQService:ForumQuestionService,
              private _userService:UserService) {

  }

  ngOnInit(): void {
    this.userId = this._userService.getIdUserLoged();
    this.getAllQuestion()
  }

  getAllQuestion(){
    this._forumQService.getAll().subscribe((data:any)=>{
      this.forumQuestions=data
    })
  }
  changeIsAddQuestion(){
    this.isAddQuestion = !this.isAddQuestion
    this.writtenQuestion=""
  }

  onQuestionInput(event: any): void {
    this.writtenQuestion = event.target.value;
  }
  addQuestion(): void {
    var newQuestion: ForumQuestion = {
      authorId: this.userId,
      question: this.writtenQuestion,
      createdAt:new Date,
    }

    this._forumQService.create(newQuestion).subscribe(()=>{
      console.log("Question added")
      this.getAllQuestion()
      this.writtenQuestion=""
      this.changeIsAddQuestion()
    })
  }

}
