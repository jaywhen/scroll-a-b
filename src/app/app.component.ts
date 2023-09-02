import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('itemA')
  itemA!: ElementRef<HTMLDivElement>;
  @ViewChild('itemB')
  itemB!: ElementRef<HTMLDivElement>;

  // @HostListener('document:wheel', ['$event.target'])
  onScroll(event: Event) {
    if (event.target === this.itemA.nativeElement) {
      console.log('scroll');
      this.itemB.nativeElement.scrollTop = (event.target as HTMLDivElement)
        .scrollTop as number;
    }
  }
}
