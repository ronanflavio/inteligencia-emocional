import { Component, OnInit, Input } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-resultado',
  templateUrl: './grafico-resultado.component.html',
  styleUrls: ['./grafico-resultado.component.css']
})
export class GraficoResultadoComponent implements OnInit {

  @Input() resultado: any;

  public graficoOptions: RadialChartOptions = {
    responsive: true,
    scale: {
      ticks: {
        suggestedMin: 0,
        suggestedMax: 24
      }
    }
  };

  public graficoLabels: Label[] = ['Empatia', 'Autogestão', 'Autoconhecimento', 'Habilidades sociais', 'Motivação'];

  public graficoData: ChartDataSets[] = [{
    data: [],
    label: 'Pontuação'
  }];

  public graficoType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
    this.montarGrafico();
  }

  ngOnChanges() {
    this.montarGrafico();
  }

  montarGrafico() {
    this.graficoData[0].data = [];
    if (this.resultado && this.resultado.length) {
      const agrupamento = [
        this.resultado.filter(f => f.pergunta.tipo == 'empatia'),
        this.resultado.filter(f => f.pergunta.tipo == 'autogestao'),
        this.resultado.filter(f => f.pergunta.tipo == 'autoconhecimento'),
        this.resultado.filter(f => f.pergunta.tipo == 'habilidadesSociais'),
        this.resultado.filter(f => f.pergunta.tipo == 'motivacao'),
      ];

      agrupamento.forEach(resposta => {
        this.graficoData[0].data.push(this.somar(resposta, 'value'));
      });
    }
  }

  somar(colecao: any, propriedade: any) {
    return colecao.reduce((a, b) => {
      return a + b.resposta[propriedade];
    }, 0)
  }
}
