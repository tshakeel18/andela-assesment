import { Component } from '@angular/core';

import { WishListFacade } from '../../facades/wishlist.facade';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  constructor(public state: WishListFacade) {}
}
