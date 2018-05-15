import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
// Routing
import { AppRoutingModule, appRouting } from './app-routing.module';
// Service
import { QuizService } from './components/quiz/quiz.service';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionsAnswersComponent } from './components/quiz/questions-answers/questions-answers.component';
import { ResultsComponent } from './components/quiz/results/results.component';
import { Error404Component } from './components/error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    QuestionsAnswersComponent,
    ResultsComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    appRouting
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
