import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosen-skill',
  templateUrl: './choosen-skill.component.html',
  styleUrls: ['./choosen-skill.component.scss']
})
export class ChoosenSkillComponent implements OnInit {

  public parentLink:string;

  constructor() { 
    this.parentLink = '/skills';
  }

  ngOnInit(): void {
  }

}
