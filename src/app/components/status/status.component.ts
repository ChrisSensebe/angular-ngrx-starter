import {Component, Input, OnInit} from '@angular/core';
import {State} from '../../store/reducers/auth.reducers';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() state: State;

  constructor() { }

  ngOnInit() {
  }

}
