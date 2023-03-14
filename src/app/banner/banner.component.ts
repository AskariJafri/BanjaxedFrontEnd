import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() path: string

  constructor(private router:Router){
  }

  onclick2(){
    console.log("pathhhh",this.path)
    this.router.navigate([this.path])
  }
}
