import { Component, OnInit } from '@angular/core';

// import {mapsrc} from "../../assets/"
import axios from "axios"
import {  Router } from '@angular/router';
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})

export class LocalComponent implements OnInit {

  // public mapInit:any;
public plus:any

  mapInit(){

    this.plus.geolocation.getCurrentPosition(function(p){
      var ele = document.getElementById("map");  //接收地图
      
      var lat = p.coords.latitude;
      var lon = p.coords.longitude;
      ele.innerHTML = "经度: "+lon+"<br>纬度 :"+lat;
      

      setTimeout(()=>{
        var map = new this.plus.maps.Map("map");   //实例化地图 
        var point = new this.plus.maps.Point(lon,lat);  //实例化小点
        
        map.centerAndZoom(point,18);  //point 显示地图 18 缩放级别
    //     var marker = new this.plus.maps.Marker(point);
    //     marker.setIcon("img/map_pot.png");
    //     marker.setLabel("千锋教育");
    //     var bubble = new this.plus.maps.Bubble("打造最好的HTML5教育培训平台-千锋");
    //  marker.setBubble(bubble);
    //     map.addOverlay(marker);  // 地图显示小点
        
    //     var oldPoint = new this.plus.maps.Point(116.340788,39.973319)
    //     this.plus.maps.Map.calculateDistance(point,oldPoint,function(event){
    //    var distance = event.distance;  // 转换后的距离值
    //    alert("2点之间的距离是 :"+distance);   // m  
    //  },function(e){
    //    alert("Failed:"+JSON.stringify(e));
    //  })
      },1500)
      
    },function(e){
      alert('Geolocation error: ' + e.message);
    })
  }


    

private date:any;
private date2:any;

  constructor(private router:Router) { }




  gotostore(item){
    
    item=JSON.stringify(item)
    localStorage.store=item;
    this.router.navigate(['/local/dtoredetail'])
    // console.log(item)
  }


  ngOnInit() {
    var em=null,map=null;
    document.addEventListener('plusready', function(){
      this.mapInit();

    });



    axios.get("http://47.94.227.171:4000/lcoal/getmapinfo")
    .then(res=>res.data)
    .then(json=>{
      
      this.date=json[0].content
      // console.log(this.date)
    })



    axios.get("http://47.94.227.171:4000/lcoal/getdish")
    .then(res=>res.data)
    .then(json=>{
      
      this.date2=json[0].content
      // console.log(this.date2)
    })

  }

 
  
}


