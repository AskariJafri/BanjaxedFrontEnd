import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  @Output() sendCardData  = new EventEmitter();
  constructor(private router: Router) {}
  // saves tutorials for a specific course
  cardData=[]
  // navigate to tutorials with this data
  onCardClick= async()=> {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var graphql = JSON.stringify({
      query: `query {\r\n   getCourseFromLessons(courseId:${this.id}){\r\n       id,\r\n       description,title\r\n\r\n   }\r\n\r\n}\r\n`,
      variables: {},
    });
    var requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow',
    };

    const data = await fetch('http://localhost:4000/graphql/', requestOptions)
      .then((response) => response.json())
    // console.log("dataaa",data)
    this.sendCardData.emit(data);
    this.router.navigate(['/tutorials'],{ state:data });

  }
}
