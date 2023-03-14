import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() heading="";
  @Input()  paragraph=""
  @Input() footerText=""
  @Input() imagePath = ""
  @Input() buttonText=""
}
