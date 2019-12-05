import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  destroy$: Subject<void> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

}
