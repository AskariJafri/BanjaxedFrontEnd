import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent {
  h4="Logo Design"
  cardData:any
  constructor(private route: Router) {
    this.cardData = {...this.route?.getCurrentNavigation()?.extras?.state?.data};
    console.log("daata",this.cardData.getCourseFromLessons)
  }
  ngOnInit() {
    // const navigation = this.route.getCurrentNavigation();
    //  this.data=this.route;
    // // this.cardData = data.cardData;
  }

}
