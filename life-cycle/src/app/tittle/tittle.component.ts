import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tittle',
  templateUrl: './tittle.component.html',
  styleUrls: ['./tittle.component.css']
})
export class TittleComponent implements OnInit {

  name: string = "Satírio"

  constructor() {}

  ngOnInit(): void {
    this.name = `Olá ${this.name}`;
  }

}
