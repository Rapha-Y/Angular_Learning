import { Component } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './courses-list.component.html',
})
export class CourseListComponent {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular: Forms",
                imageUrl: "",
                price: 99.99,
                code: "XPS-8796",
                duration: 120,
                rating: 4.5,
                releaseDate: "December, 2, 2019"
            },
            {
                id: 2,
                name: "Angular: Http",
                imageUrl: "",
                price: 45.99,
                code: "LKL-1094",
                duration: 80,
                rating: 4,
                releaseDate: "November, 4, 2019"
            }
        ]
    }

}