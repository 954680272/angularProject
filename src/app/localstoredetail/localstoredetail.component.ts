import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstoredetail',
  templateUrl: './localstoredetail.component.html',
  styleUrls: ['./localstoredetail.component.css']
})
export class LocalstoredetailComponent implements OnInit {
  private item:any
  constructor() { }

  ngOnInit() {
    this.item=localStorage.getItem('store')

    this.item=JSON.parse(this.item)
    
  }

}
