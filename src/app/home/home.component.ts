import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private router:Router){}
  cardData=[]
   ngOnInit()  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var graphql = JSON.stringify({
      query:
        'query {\r\n courses{\r\n     id,\r\n     title,\r\n     description\r\n}\r\n}',
      variables: {},
    });
    var requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow',
    };

     fetch('http://localhost:4000/graphql/', requestOptions)
      .then((response) => response.json())
      .then((result) => {
         this.cardData= result.data.courses
         console.log("carddd",this.cardData)
      })
      .catch((error) => console.log('error', error));
    // after fetching data from the server we assign the array to a class variable
    // console.log("card data",this.cardData)
  }



}
