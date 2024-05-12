import { Injectable } from '@angular/core';

import { BehaviorSubject, take } from 'rxjs';

import { SubjectService } from '../services/subject.service';
import { Subject } from '../../shared/models/subject';

@Injectable({providedIn: 'root'})
export class SubjectState {
  private _loaded$ = new BehaviorSubject(false);
  public loaded$ = this._loaded$.asObservable();

  private _subjects$ = new BehaviorSubject<Subject[]>([]);
  public subjects$ = this._subjects$.asObservable();

  private _errorLoading$ = new BehaviorSubject<string>('');
  public errorLoading$ = this._errorLoading$.asObservable();


  public subjectEntities: Map<string, Subject> = new Map();

  constructor(private service: SubjectService) {}

  fetchSubjects() {
    this.service.getSubjects('finance').pipe(take(1)).subscribe({
      next: (subjects) => {
        subjects.forEach(item => this.subjectEntities.set(item.id, item));
        this._subjects$.next(subjects),
        this._errorLoading$.next('');
        this._loaded$.next(true)
      },
      error: () => {
        this._loaded$.next(true);
        this._errorLoading$.next('Something went wrong')
      }
    })
  }

  fetchSubjectById(id: string) {
    return this.subjectEntities.get(id);
  }
}