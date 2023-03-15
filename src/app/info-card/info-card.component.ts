import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() heading = '';
  @Input() paragraph = '';
  @Input() footerText = '';
  @Input() imagePath = '';
  @Input() buttonText = '';
  @Input() id = '';
  @Output() courseId = new EventEmitter<string>();
  onCardClick() {
    this.courseId.emit('Data from child component');
  }
}
