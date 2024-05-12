import { Injectable } from '@angular/core';

import { WishlistState } from '../states/wishlist.state';

@Injectable({providedIn: 'root'})
export class WishListFacade {
  getWishList = this.state.getWishList.bind(this.state);
  add = this.state.add.bind(this.state);
  remove = this.state.remove.bind(this.state);
  isSubjectInWishList = this.state.isSubjectInWishList.bind(this.state);

  constructor(private state: WishlistState) {}
}