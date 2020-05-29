import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  floatNum = 0;  

  up() {
    this.floatNum++;
  }

  down() {
    this.floatNum--;
  }

}
