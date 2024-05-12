import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent {
  @Input() subjects: Subject[] | null = null;
  @Input() isInWishList?: (value: string) => boolean;

  @Output() removeFromWishList = new EventEmitter<Subject>();
  @Output() addToWishList = new EventEmitter<Subject>();
}
