import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public htmlQuiz = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Markup Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correctOption: 0
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: [
        "<link>",
        "<href>",
        "<a>",
        "<hyperlink>"
      ],
      correctOption: 2
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: [
        "<lb>",
        "<break>",
        "<br>",
        "<newline>"
      ],
      correctOption: 2
    }
    // Add more questions...
  ];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }

}
