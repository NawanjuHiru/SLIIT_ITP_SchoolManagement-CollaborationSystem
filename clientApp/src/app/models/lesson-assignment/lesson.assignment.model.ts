import { Injectable } from '@angular/core';

@Injectable()
export class LessonAssignmentModel{
    id:number;
    lessonId :number ;
    name :string;
    descripstion:string;
    //startDate:Date;
    //dueDate:Date;
    isActive :boolean;
    createdOn :Date;
    createdById: number;
    updatedOn : Date;
    updatedById :number;
}

       