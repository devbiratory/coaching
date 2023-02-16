import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privacy',
  // standalone: true,
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  @Input() name = '';
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
