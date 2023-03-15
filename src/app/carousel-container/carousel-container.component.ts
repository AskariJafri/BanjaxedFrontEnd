import { Component, Input } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})

export class CarouselContainerComponent {

  @Input() cardHeading = "Our Services" // decorating the property with input
  buttonText= "test"
  @Input()  cardContent: any = [
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today",buttonText: "test"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today",buttonText: "test"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today",buttonText: "test"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today",buttonText: "test"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today",buttonText: "test"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today",buttonText: "test"}
  ]

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("carousel data:",this.cardContent)

  }
}
