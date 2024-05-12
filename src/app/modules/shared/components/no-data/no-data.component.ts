import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-no-data',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss'
})
export class NoDataComponent {

}
