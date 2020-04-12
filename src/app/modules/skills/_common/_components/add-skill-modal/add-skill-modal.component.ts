import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-skill-modal',
  templateUrl: './add-skill-modal.component.html',
  styleUrls: ['./add-skill-modal.component.scss']
})
export class AddSkillModalComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      
    })
  }

}
