import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosenSkillComponent } from './choosen-skill.component';

describe('ChoosenSkillComponent', () => {
  let component: ChoosenSkillComponent;
  let fixture: ComponentFixture<ChoosenSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosenSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
