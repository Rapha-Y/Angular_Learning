import { NgModule } from '@angular/core';
import { CourseListComponent } from './courses-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from '../error-404/error-404.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { StarComponent } from '../star/star.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
        StarComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'courses', component: CourseListComponent },
            { path: 'courses/info/:id', component: CourseInfoComponent }
        ])
    ]
})
export class CourseModule {

}