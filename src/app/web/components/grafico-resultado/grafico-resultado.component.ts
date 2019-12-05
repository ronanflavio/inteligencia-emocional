import { Component, OnInit, Input } from '@angular/core';
import { RadialChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-resultado',
  templateUrl: './grafico-resultado.component.html',
  styleUrls: ['./grafico-resultado.component.css']
})
export class GraficoResultadoComponent implements OnInit {

  @Input() resultado: any;

  public graficoOptions: RadialChartOptions = {
    responsive: true
  };

  public graficoLabels: Label[] = ['Empatia', 'Auto gestão', 'Auto conheicmento', 'Habilidades sociais', 'Motivação'];

  public graficoData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    this.montarGrafico();
  }

  ngOnChanges() {
    this.montarGrafico();
  }

  montarGrafico() {
    if (this.resultado && this.resultado.length) {
      const agrupamento = [
        this.resultado.filter(f => f.pergunta.tipo == 'empatia'),
        this.resultado.filter(f => f.pergunta.tipo == 'autoGestao'),
        this.resultado.filter(f => f.pergunta.tipo == 'autoConhecimento'),
        this.resultado.filter(f => f.pergunta.tipo == 'habilidadesSociais'),
        this.resultado.filter(f => f.pergunta.tipo == 'motivacao'),
      ];

      agrupamento.forEach(resposta => {
        this.graficoData.push(this.somar(resposta, 'valor'));
      });
    }
  }

  somar(colecao: any, propriedade: any) {
    return colecao.reduce((a, b) => {
      return a + b.resposta[propriedade];
    }, 0)
  }
}
