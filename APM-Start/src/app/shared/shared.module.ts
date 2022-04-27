import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star.component';

@NgModule({
  declarations: [ConvertToSpacesPipe, StarComponent],
  exports: [
    CommonModule,ConvertToSpacesPipe, StarComponent, FormsModule],
})
export class SharedModule {}
