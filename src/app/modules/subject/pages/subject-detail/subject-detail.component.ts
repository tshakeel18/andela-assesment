import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { Subject, filter, takeUntil } from 'rxjs';

import { SubjectFacade } from '../../../home/facades/subject.facade';
import { Subject as SubjectModel } from '../../../shared/models/subject';
import { WishListFacade } from '../../../wishlist/facades/wishlist.facade';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.scss'
})
export class SubjectDetailComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
  public subject?: SubjectModel;
  
  constructor(
    public state: SubjectFacade, 
    private router: Router, 
    private route: ActivatedRoute, 
    public wishlistFacade: WishListFacade
  ) {
    this.router.events.pipe(
      takeUntil(this._destroy$), 
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.getId());

    this.state.loaded$.pipe(
      takeUntil(this._destroy$),
      filter(data => !data)
    ).subscribe({next: () => this.state.fetchSubjects()})
  }

  ngOnInit(): void {
    this.getId();
  }

  addToWishList() {
    if (this.subject) {
      this.wishlistFacade.add(this.subject);
    }
  }

  removeFromWishList() {
    if (this.subject) {
      this.wishlistFacade.remove(this.subject);  
    }
  }

  private getId() {
    const params = this.route.snapshot.params;

    if (params['id'] && this.router.url.indexOf('subject') > -1) {
      this.subject = this.state.fetchSubjectById(params['id']);

      if (!this.subject) {
        this.router.navigate(['/'])
      }
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.unsubscribe();
  }
}
