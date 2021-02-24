import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-danger',
  templateUrl: './alert-danger.component.html',
  styleUrls: ['./alert-danger.component.scss']
})
export class AlertDangerComponent implements OnInit {

  @Input() message: string = '';
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
