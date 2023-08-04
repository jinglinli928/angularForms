import { EnrollmentService } from './enrollment.service';
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User("Jinglin", "rob@test.com", 5075174954, 'default', 'morning', true);
  topicHasError = true;
  formSubmitted = false;
  errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService){}
  validateTopic(value:string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit(){
    this.formSubmitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
  }
}
