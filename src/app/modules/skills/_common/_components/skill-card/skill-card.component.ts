import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() skill;
  
  public routerLink: string;
  constructor() {}

  ngOnInit(): void {
    this.routerLink = `/skills/${this.skill.id}`;
  }

}
