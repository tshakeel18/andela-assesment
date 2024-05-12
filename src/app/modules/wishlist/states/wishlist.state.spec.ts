import { TestBed } from '@angular/core/testing';

import { WishlistState } from './wishlist.state';
import { ObjectMapper } from 'json-object-mapper';
import { Subject } from '../../shared/models/subject';

describe('WishistState', () => {
  let service: WishlistState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [WishlistState]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(WishlistState);
    localStorage.removeItem('wishlist')
  });

  it('should add a subject to the wishlist', () => {
    const subject = ObjectMapper.deserialize(Subject, { id: '1', name: 'Test Subject' });
    service.add(subject);
    expect(localStorage.getItem('wishlist')).toBeTruthy();
    const storedSubjects = JSON.parse(localStorage.getItem('wishlist') ?? '');
    expect(storedSubjects.length).toBe(1);
    expect(storedSubjects[0].id).toBe('1');
  });

  it('should remove a subject from the wishlist', () => {
    const subject = ObjectMapper.deserialize(Subject, { id: '1', name: 'Test Subject' });
    service.add(subject);
    service.remove(subject);
    expect(localStorage.getItem('wishlist')).toBeFalsy();
  });

  it('should check if a subject is in the wishlist', () => {
    const subject = ObjectMapper.deserialize(Subject, { id: '1', name: 'Test Subject' });
    service.add(subject);
    expect(service.isSubjectInWishList('1')).toBe(true);
    expect(service.isSubjectInWishList('2')).toBe(false);
  });

  it('should get the wishlist', () => {
    const subject1 = ObjectMapper.deserialize(Subject, { id: '1', name: 'Test Subject 1' });
    const subject2 = ObjectMapper.deserialize(Subject, { id: '2', name: 'Test Subject 2' });
    service.add(subject1);
    service.add(subject2);
    const wishlist = service.getWishList();
    expect(wishlist.length).toBe(2);
    expect(wishlist[0].id).toBe('1');
    expect(wishlist[1].id).toBe('2');
  });
});