import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/general';
import { GenericApiResponse } from 'src/app/models/response';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
	course: Course;

	constructor(private route: ActivatedRoute,
				private apiService: ApiService)
	{ }

	ngOnInit(): void {
		const courseId = this.route.snapshot.params['id'];
		this.getCourseDetails(courseId);
	}

	getCourseDetails(id: string): void {
		this.apiService.getData('courses/' + id).subscribe({
			next: (resp: GenericApiResponse) => this.course = resp.data.course
		});
	}
}
