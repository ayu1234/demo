import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  tempArray = [];
  completeArray=[0];
  currentNum;
  total = 0;
  constructor() { }

  ngOnInit() {
  }
  selectNum(num){
    this.tempArray.push(num);
    console.log(this.tempArray);
    this.currentNum = Number(this.tempArray.join(''));
    if(this.completeArray.length < 2)
      this.completeArray[0]=this.currentNum;
    else{
      this.completeArray[2]=this.currentNum;
    }
    console.log(this.currentNum);
  }
  clr(){
    this.completeArray.splice(0, this.completeArray.length);
    this.currentNum=0;
    this.tempArray.splice(0, this.tempArray.length);
  }
  selectOperator(operator){
    this.currentNum=0;
    this.completeArray.push(operator);
    if(this.completeArray.length ==4){
      if(this.completeArray[1].toString() == '+') {
        this.completeArray[0] = Number(this.completeArray[0]) + Number(this.completeArray[2]);
        
      }
      else if(this.completeArray[1].toString() == '-') {
        this.completeArray[0] = Number(this.completeArray[0]) - Number(this.completeArray[2]);
        console.log(this.total);
      }
      else if(this.completeArray[1].toString() == '*') {
        this.completeArray[0] =  Number(this.completeArray[0]) * Number(this.completeArray[2]);
        console.log(this.total);
      }
      else if(this.completeArray[1].toString() == '/') {
        this.completeArray[0] = Number(this.completeArray[0]) / Number(this.completeArray[2]);
        console.log(this.total);
      }
      else if(operator == '=') {
        const tempVal = this.completeArray[0];
        this.completeArray.splice(0, this.completeArray.length);
        this.completeArray.push(tempVal);
      }
      this.completeArray.splice(1, this.completeArray.length-2);
    }
    this.tempArray.splice(0, this.tempArray.length);
  }
}
