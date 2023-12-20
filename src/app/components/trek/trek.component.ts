import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Trek} from "../../models/Trek";

@Component({
  selector: 'app-trek',
  templateUrl: './trek.component.html',
  styleUrls: ['./trek.component.css']
})
export class TrekComponent {
  @Input() trek!: Trek;
  @Output() click = new EventEmitter()
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

}
