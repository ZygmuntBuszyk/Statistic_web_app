import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal'
import { DataTransferService } from '../../_services/data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() skill;

  constructor(public ngxSmartModalService: NgxSmartModalService,
    private dataTransferService: DataTransferService,
    private router: Router) { }

  ngOnInit(): void {}

  deleteSkill() {
    this.dataTransferService.addDeleteSkill(this.skill);
    this.ngxSmartModalService.getModal('confirmationModal').close();
    this.router.navigateByUrl('/skills');
  }
}
