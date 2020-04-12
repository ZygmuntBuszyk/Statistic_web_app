import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
private skill = new Subject();
private skillToDelete = new Subject();

  constructor() { }

  get skill$() {
    return this.skill.asObservable().pipe(
      map(skill => skill)
    // map(skill => !!skill)
    )
  }

  get skillToDelete$() {
    return this.skillToDelete.asObservable().pipe(
      map(skill => skill)
    )
  }

  addSkill(skill) {
    this.skill.next(skill);
  }

  addDeleteSkill(skill) {
    this.skillToDelete.next(skill);
  }
}
