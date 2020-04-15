import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SkillForm, SkillFormName } from 'src/app/_models/skillForm.model'
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-add-skill-modal',
  templateUrl: './add-skill-modal.component.html',
  styleUrls: ['./add-skill-modal.component.scss']
})
export class AddSkillModalComponent implements OnInit {



  constructor(private fb: FormBuilder,private ngxSmartModalService: NgxSmartModalService) {
  }

  addForm: FormGroup;

  testForm: FormGroup;

  success = false;
  loading = false;

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', [Validators.minLength(2), Validators.required]],
      formParameters: this.fb.array([this.groupParameter])
    }); 
  }

  get getParameters() {
    return this.addForm.get('formParameters') as FormArray;
  }

  addParameter() {
    this.getParameters.push(this.groupParameter);
  }

  deleteParameter(index) {
    this.getParameters.removeAt(index);
  }

  get groupParameter() {
    return this.fb.group({name: ['',[ Validators.minLength(2), Validators.required]]});
  }
  
 submitHandler() {
    console.log('added');
    
    this.success = true;
    this.loading = false;
    this.addForm = this.fb.group({
      name: ['', [Validators.minLength(2), Validators.required]],
      formParameters: this.fb.array([this.groupParameter])
    }); 
    this.ngxSmartModalService.getModal('addSkillModal').close();

  }
}
