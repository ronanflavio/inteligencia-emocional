import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-resultado',
  templateUrl: './grafico-resultado.component.html',
  styleUrls: ['./grafico-resultado.component.css']
})
export class GraficoResultadoComponent implements OnInit {

  @Input() resultado: any;

  constructor() { }

  ngOnInit() {
  }

}
