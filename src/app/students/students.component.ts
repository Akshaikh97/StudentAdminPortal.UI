import { Component, OnInit } from '@angular/core';
import { Student } from '../models/ui-models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = []; //array which came from ui.model
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(
      (successResponse) => {
        this.students = successResponse; //binding inbetween ui=api;
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
}
