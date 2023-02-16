import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Message } from 'src/app/models/message';
import { ApiService } from 'src/app/services/api.service';
import { PrivacyComponent } from '../privacy/privacy.component';
import { TermsComponent } from '../terms/terms.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: Message = new Message();
  submitted = false;
  model = {
    name: '',
    email: '',
    general: false,
    academic: false,
    interaction: false,
    message: ''
  };
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  resetForm() {
    this.model = {
      name: '',
      email: '',
      general: false,
      academic: false,
      interaction: false,
      message: ''
    };
  }

  onSubmit(form: NgForm): void {
    if (!this.model.name || !this.model.email || !this.model.message) {
      return;
    }
    this.submitted = true;
    this.apiService
      .create(this.model)
      .then(() => {
        this.resetForm();

        this.submitted = false;
        this.toastr.success('Message sent', 'We will get back to you ASAP!');
        // this.router.navigate(['/']);
        form.resetForm();
      })
      .catch((e: any) => {
        console.log('error ', e);
        this.submitted = false;
        this.toastr.error(
          'Message not sent',
          'There was an error in sending the message, we will email you when it is fixed and get back to you'
        );
      });
  }

  openTerms(): void {
    const modalRef = this.modalService.open(TermsComponent);
    modalRef.componentInstance.name = '';
  }

  openPrivacy(): void {
    const modalRef = this.modalService.open(PrivacyComponent);
    modalRef.componentInstance.name = '';
  }
}
