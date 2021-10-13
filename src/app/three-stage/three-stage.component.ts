import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-three-stage',
  templateUrl: './three-stage.component.html',
  styleUrls: ['./three-stage.component.scss']
})
export class ThreeStageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // ...
  }

}
