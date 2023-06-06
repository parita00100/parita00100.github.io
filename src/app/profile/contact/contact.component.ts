import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private profileService: ProfileService){
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
            subject: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
     }

  onSubmit(FormData: any) {
    console.log(FormData)
    this.profileService.postContactDetails(FormData)
      .subscribe(response => {
        console.log(response)
        location.href ="https://mailthis.to/confirm"
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
