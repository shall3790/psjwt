import { Component, OnInit } from '@angular/core';

import { PsjwtApiServiceService } from '../psjwt-api-service.service';
import { AuthTokenService } from '../auth-token.service';

@Component({
  moduleId: module.id,
  selector: 'app-jobs',
  templateUrl: 'jobs.component.html',
  styleUrls: ['jobs.component.css']
})
export class JobsComponent implements OnInit {
  title: string = "Jobs";
  jobs: string[] = [];
  constructor(private _service: PsjwtApiServiceService, 
              private _authToken: AuthTokenService) {
    //this.jobs = ["HTML 5", "AngularJS", "Karma"];
  }

  ngOnInit() {
    this._service.getJobs()
      .subscribe(data => {
        this.jobs = data;
      },
      error => {
        console.error(error);
      });
  }

}
