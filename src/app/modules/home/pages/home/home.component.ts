import { Component, OnDestroy} from '@angular/core';

import { SubjectFacade } from '../../facades/subject.facade';
import { filter, Subject, takeUntil } from 'rxjs';
import { WishListFacade } from '../../../wishlist/facades/wishlist.facade';
import { Subject as SubjectModel } from '../../../shared/models/subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  private _destroy$ = new Subject();

  constructor(
    public state: SubjectFacade, 
    public wishlistFacade: WishListFacade
  ) {
    this.state.loaded$.pipe(
      filter(value => !value),
      takeUntil(this._destroy$)
    ).subscribe({next: () => this.state.fetchSubjects()});
  }

  addToWishList(subject: SubjectModel) {
    if (subject) {
      this.wishlistFacade.add(subject);
    }
  }

  removeFromWishList(subject: SubjectModel) {
    if (subject) {
      this.wishlistFacade.remove(subject);  
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.unsubscribe();
  }
}
