import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService } from './_common/_services/data-transfer.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public activeRouter: ActivatedRoute, private dataTransferService: DataTransferService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit(): void {
    this.dataTransferService.skillToDelete$.subscribe(
      skill => this.deleteSkill(skill)
    )
  }

  deleteSkill(skill) {
    this.test = this.test.filter(
      item => item != skill
    )
  }

  addSkill() {
    this.ngxSmartModalService.getModal('addSkillModal').open();
  }

  test = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7},
  ]
}
