import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

changeacIndex(e){
  var activeLi=  e.target["parentNode"]["parentNode"] ;
  $(".foot_list").removeClass("active");
  $(activeLi).addClass("active")

}
  
  constructor() { }

  ngOnInit() {
  }

}
