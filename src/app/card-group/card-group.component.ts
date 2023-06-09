import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {

  @Input() heading="";
  @Input() cardData: any=[
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today"},
    // {heading:"3D Modeling",paragraph:"test paragraph",footerText:"Start Today"}
  ]
  onLessonsLoad(data:any){
    console.log("clicked with data",data)
    this.cardData=data
  }

}
