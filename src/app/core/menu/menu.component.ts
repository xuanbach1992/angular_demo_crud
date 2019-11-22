import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  @Output() keySearch: any = new EventEmitter();

  ngOnInit() {
  }

  search(event) {
    const keyWord = event.target.value;
    this.keySearch.emit(keyWord);
  }
}
