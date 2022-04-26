import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input()
  rating: number = 0;
  cropWidth: number = 0;

  @Output()
  rate: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75 / 5;
  }
  onClick(): void{
    this.rate.emit(this.rating);
  }
}
