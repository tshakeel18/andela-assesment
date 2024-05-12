import { Injectable } from '@angular/core';

import { SubjectState } from '../states/subject.state';

@Injectable({providedIn: 'root'})
export class SubjectFacade {
  loaded$ = this.state.loaded$;
  subjects$ = this.state.subjects$;
  error$ = this.state.errorLoading$;

  fetchSubjects = this.state.fetchSubjects.bind(this.state);
  fetchSubjectById = this.state.fetchSubjectById.bind(this.state);

  constructor(private state:  SubjectState) {}
}