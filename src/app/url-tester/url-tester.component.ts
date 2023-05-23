import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCheckerService } from './services/api-checker.service';

@Component({
  selector: 'app-url-tester',
  templateUrl: './url-tester.component.html',
  styleUrls: ['./url-tester.component.css']
})
export class UrlTesterComponent implements OnInit {
  public formUrl!: FormGroup;
  public response!: string;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly apiChecker: ApiCheckerService
  ) { }

  ngOnInit(): void {
    this.formUrl = this.formInit();
  }

  async submitForm(){
    try {
      if(!this.formUrl.valid) throw new Error('Form invalid')

      const data = await this.apiChecker.sendRequest(this.formUrl.value.url);
      console.log(data.data);
      this.response = data.data;
    } catch (error) {
      console.error(`${this.submitForm.name}: error: ${error}`);
      throw error;
    }
  }

  formInit() {
    return this.formBuilder.group({
      url: new FormControl('', Validators.required),
    })
  }
}
