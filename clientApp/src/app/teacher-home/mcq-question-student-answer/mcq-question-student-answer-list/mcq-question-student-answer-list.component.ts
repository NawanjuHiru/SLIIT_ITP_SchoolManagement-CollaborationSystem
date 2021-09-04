import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { McqQuestionStudentAnswerService } from './../../../services/mcq-question-student-answer/mcq-question-student-answer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mcq-question-student-answer-list',
  templateUrl: './mcq-question-student-answer-list.component.html',
  styleUrls: ['./mcq-question-student-answer-list.component.sass'],
  providers: [ToastrService],
})


export class McqQuestionStudentAnswerListComponent implements OnInit {

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
    data = [];
    scrollBarHorizontal = window.innerWidth < 1200;
    loadingIndicator = false;
    reorderable = true;
    McqStudenAnswerForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private McqQuestionStudentAnswerService : McqQuestionStudentAnswerService,
    private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {}


  //add new mcq question student answerusing form
  createNewMcqStudentAnswer(content)
  {
    this.McqStudenAnswerForm = this.fb.group({
      questionid:['', [Validators.required]],
      studentid:['', [Validators.required]],
      mcqanswerid:['', [Validators.required]],
      answertext:['', [Validators.required]],
    });

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }


  //save MCQ Student Answer button 
  saveMcqStudentAnswer()
  {
    console.log(this.McqStudenAnswerForm.value);

    this.McqQuestionStudentAnswerService.saveMcqStudentAnswer(this.McqStudenAnswerForm.value)
      .subscribe(response=>{
        
        if(response.isSuccess)
        {
            this.modalService.dismissAll();
            this.toastr.success(response.message,"Success");
            //this.getAll();
        }
        else
        {
            this.toastr.error(response.message,"Error");
        }
      },error=>{

            this.toastr.error("Network error has been occre.Please try again","Error");
      });
    
  }

}
