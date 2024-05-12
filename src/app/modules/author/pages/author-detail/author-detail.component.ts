import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { Subject, filter, takeUntil } from 'rxjs';

import { Author } from '../../../shared/models/author';
import { AuthorFacade } from '../../facades/author.facade';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.scss'
})
export class AuthorDetailComponent implements  OnDestroy {
  private _destroy$ = new Subject();
  public author?: Author;

  constructor(
    public state: AuthorFacade, 
    private router: Router, 
    private route: ActivatedRoute
  ) {

    this.router.events.pipe(
      takeUntil(this._destroy$), 
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.getId())
  }

  private getId() {
    const params = this.route.snapshot.params;
    
    if (params['id'] && this.router.url.indexOf('author') > -1) {
      this.state.fetchDetail(params['id']);
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.unsubscribe();
    this.state.reset();
  }
}
