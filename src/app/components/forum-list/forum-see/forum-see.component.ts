import {Component, Input, OnInit} from '@angular/core';
import {ForumQuestionService} from "../../../public/shared/services/forumservice/forum-question.service";
import {ForumAnswerService} from "../../../public/shared/services/forumservice/forum-answer.service";
import {ForumQuestion} from "../../../models/ForumQuestion";
import {ForumAnswer} from "../../../models/ForumAnswer";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../public/shared/services/userservice/user.service";

@Component({
  selector: 'app-forum-see',
  templateUrl: './forum-see.component.html',
  styleUrls: ['./forum-see.component.css']
})
export class ForumSeeComponent implements OnInit{

  userId!:number
  question!:ForumQuestion
  answers:ForumAnswer[]=[]
  writtenAnswer:string=""
  questionId!:number

  constructor(private _forumQservice:ForumQuestionService,
              private _forumAservice:ForumAnswerService,
              private _userService:UserService,
              private _route:ActivatedRoute) {

    this._route.params.subscribe(params => {
      this.questionId = +params['id'];
    })
  }

  ngOnInit(): void {
    this.userId = this._userService.getIdUserLoged();
    this.getAllAnswers()

  }

  getAllAnswers(){
    this._forumQservice.getById(this.questionId).subscribe((question: any) => {
      this.question = question;

      this._forumAservice.getAllAnswersByQuestionId(this.questionId).subscribe((data:any)=>{
        this.answers=data;
      })

    });
  }

  onAnswerInput(event: any): void {
    this.writtenAnswer = event.target.value;
  }
  addAnswer(): void {
    if(this.writtenAnswer == ""){
      return
    }
    var newAnswer: ForumAnswer = {
      authorId: this.userId,
      questionId: this.questionId,
      content:this.writtenAnswer,
      createdAt:new Date,
    }

    this._forumAservice.create(newAnswer).subscribe(()=>{
      console.log("Answer added")
      this.getAllAnswers()
      this.writtenAnswer=""
    })
  }
}
