import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../_services/data-transfer.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-choosen-skill',
  templateUrl: './choosen-skill.component.html',
  styleUrls: ['./choosen-skill.component.scss']
})
export class ChoosenSkillComponent implements OnInit {

  public parentLink:string;
  public skill$: Observable<any>;

  constructor(private dataTransferService:DataTransferService, private router: Router, public ngxSmartModalService: NgxSmartModalService ) { 
    this.parentLink = '/skills';
    this.skill$ = this.dataTransferService.skill$;
  }

  ngOnInit(): void {}

  deleteSkill(skill) {
    this.ngxSmartModalService.getModal('confirmationModal').open();
  }
}
