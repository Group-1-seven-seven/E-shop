import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-command',
  templateUrl: './admin-command.component.html',
  styleUrls: ['./admin-command.component.scss']
})
export class AdminCommandComponent implements OnInit {
  @Input() data: any
  @Output() commandEmitter = new EventEmitter()
  

  constructor() { }

  ngOnInit(): void {
  }

  action = (data: any) => {
    this.commandEmitter.emit(data)
  }

}