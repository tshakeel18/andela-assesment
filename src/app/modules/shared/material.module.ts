import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
