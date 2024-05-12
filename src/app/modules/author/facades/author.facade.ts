import { Injectable } from '@angular/core';

import { AuthorState } from '../states/author.state';

@Injectable({providedIn: 'root'})
export class AuthorFacade {
  loaded$ = this.state.loaded$;
  detail$ = this.state.author$;
  error$ = this.state.errorLoading$;

  fetchDetail = this.state.fetchAuthDetail.bind(this.state);
  reset = this.state.reset.bind(this.state);
  
  constructor(private state: AuthorState) {}
}