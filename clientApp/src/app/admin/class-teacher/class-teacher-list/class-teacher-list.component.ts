import { logging } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Component, OnInit, ViewChild } from '@angular/core';

import { DropDownModel } from './../../../models/common/drop-down.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-teacher-list',
  templateUrl: './class-teacher-list.component.html',
  styleUrls: ['./class-teacher-list.component.sass'],
  providers: [ToastrService],
})
export class ClassTeacherListComponent implements OnInit {

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  data = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  loadingIndicator = false;
  saveClassTeacherForm:FormGroup;
  reorderable = true;
  //classTeacher:classteacherModel;
  classnames:DropDownModel[] = [];
  academicLavels:DropDownModel[] = [];
  academicYears:DropDownModel[] = [];
  classTeachers:DropDownModel[] = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    //private classTeacherService:ClassTeacherService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    /* this.getAll();
    this.getAllClassNames();
    this.getAllAcademicLevels();
    this.getAllAcademicYears();
    this.getAllTeachers(); */
  }

 /*  getAllClassNames()
      {
        this.classTeacherService.getAllClassNames()
          .subscribe(response=>
          { 
            this.classnames = response;
            console.log(response);
            
          },error=>{
            this.toastr.error("Network error has been occured. Please try again.","Error");
           });
      }

    getAllAcademicYears()
    {
      this.classTeacherService.getAllAcademicYears()
        .subscribe(response=>
        { 
          this.academicYears = response;
        },error=>{
          this.toastr.error("Network error has been occured. Please try again.","Error");
         });
    }

  getAllAcademicLevels()
  {
    this.classTeacherService.getAllAcademicLevels()
      .subscribe(response=>
      { 
        this.academicLavels = response;
      },error=>{
        this.toastr.error("Network error has been occured. Please try again.","Error");
       });
  }

  getAllTeachers(){
    this.classTeacherService.getAllTeachers()
    .subscribe(response=>{

      console.log(response);

      this.classTeachers = response;
    },error=>{

    });
    
  }

  getAll()
  {
    this.loadingIndicator=true;
    this.classTeacherService.getAll()
    .subscribe(response=>
    {
        this.data= response;
        this.loadingIndicator=false;
    },error=>{
      this.loadingIndicator=false;
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });
  }

  addNewClassteacher(content) {

    this.saveClassTeacherForm = this.fb.group({
      classNameId: [null, [Validators.required]],
      academicLevelId: [null, [Validators.required]],
      academicYearId: [null, [Validators.required]],
      teacherId: [null, [Validators.required]],
      isActive:[true],
      isPrimary:[true],
    });

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }

  saveClassTeacher(){

    console.log(this.saveClassTeacherForm.value);

    this.classTeacherService.saveClassTeacher(this.saveClassTeacherForm.value)
    .subscribe(response=>{

      if(response.isSuccess)
        {
          this.modalService.dismissAll();
          this.toastr.success(response.message,"Success");
          this.getAll();
        }
        else
        {
          this.toastr.error(response.message,"Error");
        }
    },error=>{
      this.toastr.error("Network error has been occured. Please try again.","Error");
    });
  }

  onAddRowSave(form: FormGroup) {
    this.data.push(form.value);
    this.data = [...this.data];
    form.reset();
    this.modalService.dismissAll();
    this.addRecordSuccess();
  } */
  
  /* editRow(row:classteacherModel, rowIndex:number, content:any) {

    console.log(row);

    this.saveClassTeacherForm = this.fb.group({
      selectclassNameId: [row.classNameId, [Validators.required]],
      selectacademicLevelId: [row.academicLevelId, [Validators.required]],
      selectacademicYearId: [row.academicYearId, [Validators.required]],
      selectteacherId: [row.teacherId, [Validators.required]],
      isPrimary: [row.isPrimary, [Validators.required]],
    });

    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  } */

//delete class teacher
/*  deleteClassTeacher(row) {
  Swal.fire({
    title: 'Are you sure Delete Class Teacher ?',
    showCancelButton: true,
    confirmButtonColor: 'red',
    cancelButtonColor: 'green',
    confirmButtonText: 'Yes',
  }).then((result) => {
    if (result.value) {

      this.classTeacherService.delete(row.teacherId).subscribe(response=>{

        if(response.isSuccess)
        {
          this.toastr.success(response.message,"Success");
          this.getAll();
        }
        else
        {
          this.toastr.error(response.message,"Error");
        }
  
      },error=>{
        this.toastr.error("Network error has been occured. Please try again.","Error");
      });
    }
  });
} */

}
