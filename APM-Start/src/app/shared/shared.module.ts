import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star.component';

@NgModule({
  declarations: [ConvertToSpacesPipe, StarComponent],
  exports: [ConvertToSpacesPipe, StarComponent],
})
export class SharedModule {}
