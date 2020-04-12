import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../../_services/data-transfer.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() skill;
  
  public routerLink: string;
  constructor(private dataTransferService:DataTransferService) {}

  ngOnInit(): void {
    this.routerLink = `/skills/${this.skill.id}`;
  }

  sendSkill() {
    setTimeout(()=> this.dataTransferService.addSkill(this.skill));
    
  }
}
