import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// Service
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  quizScore: number = null;
  @Output() scoreSend = new EventEmitter<number>();

  constructor(
    public _quizService: QuizService,
    public router: Router
  ) { }

  ngOnInit() {
    // Get Current Score
    this.quizScore = this._quizService.score;
  }

  // Send Score to Quiz Component (parent)
  sendScore() {
    console.log("sendScore()");
    this.scoreSend.emit(this.quizScore);
  }

  ngOnDestroy() {
    console.log('RESULTS ARE DESTROYED.')
    this._quizService.quizScore(null);
    this._quizService.quizDone(false);
  }

}
