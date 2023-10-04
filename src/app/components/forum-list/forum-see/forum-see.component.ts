import {Component, Input, OnInit} from '@angular/core';
import {ForumQuestionService} from "../../../public/shared/services/forum-question.service";
import {ForumAnswerService} from "../../../public/shared/services/forum-answer.service";
import {ForumQuestion} from "../../../models/ForumQuestion";
import {ForumAnswer} from "../../../models/ForumAnswer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-forum-see',
  templateUrl: './forum-see.component.html',
  styleUrls: ['./forum-see.component.css']
})
export class ForumSeeComponent implements OnInit{

  question!:ForumQuestion
  answers:ForumAnswer[]=[]

  questionId!:number

  constructor(private _forumQservice:ForumQuestionService,
              private _forumAservice:ForumAnswerService,
              private _route:ActivatedRoute) {

    this._route.params.subscribe(params => {
      this.questionId = +params['id'];
    })
  }

  ngOnInit(): void {

    this._forumQservice.getById(this.questionId).subscribe((question: any) => {
      this.question = question;

      this._forumAservice.getAll().subscribe((data: any) => {
        this.answers = data.filter((answer: ForumAnswer) => answer.questionId == this.questionId);
      });
    });




  }



}
