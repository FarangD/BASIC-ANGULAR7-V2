import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular7-V2';
header:string= 'Basic Angular 7';
content:string=`With 
<a href="https://www.google.com">supporting </a>
 text below as a natural lead-in to additional content.`//ใช้ template string ` ครอบ String เพราะจะได้ใช้ tag a ได้
botton:string='เนื้อหาเพิ่มเติม'
linkAddress:string='https://www.google.com';
ttvoneAttr:string="hello angular bind data attribute"
styleColor:string='red'
alertClass:string='alert alert-primary'
isSuccess:boolean=true
isShowHideAlert:boolean=true


constructor(){


  setTimeout(() =>{
    
    this.styleColor='blue';
    this.title='ทดสอบเขียน Angular 7';
    this.alertClass='alert alert-danger'
    this.isSuccess=false

  },2000) //settimeout ไว้ที่ 2 วิ เเล้วคำจะเปลี่ยนเป็น ทดสอบเขียน Angular 7


  setTimeout(() => {this.title='ทดสอบเขียน'; this.styleColor='green'},4000) //แบบนี้ก็เขียนได้ settimeout ไว้ที่ 4 วิ เเล้วคำจะเปลี่ยนเป็น ทดสอบเขียน Angular 7

  }

onclickEvent(elem: Event){

  console.log(elem);
  console.log('event click');
  this.isShowHideAlert= !this.isShowHideAlert //เดิมมันเป็น true พอกดมันจะเป็น fale พอกดอีกที่มันก็จะเป็น true เพราะมาใส่ว่าถ้ากดเเล้วค่าจะไม่เท่ากับตัวมันเอง

}

}
