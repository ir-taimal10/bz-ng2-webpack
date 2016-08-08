import {Component, ElementRef, Input, SimpleChange} from '@angular/core';
import {TranslatePipe} from "ng2-translate/ng2-translate";
const COMPONENT_STYLES = require('./progressChart.less');
@Component({
  selector: 'progress-chart',
  pipes: [TranslatePipe],
  styles: [COMPONENT_STYLES.toString()],
  template: require('./progressChart.html'),
  directives: []
})
export class ProgressChart {
  private element;
  private canvas;
  @Input() properties: any;
  @Input() percent: number;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.properties = this.properties || {
        mainLineColor: "red",
        secondaryLineColor: "blue",
        lineWidth: 2,
        textColor: "#ffffff",
        size: 300,
        progressive: true
      };
    this.drawPieChart();
  }


  private drawPieChart() {
    this.canvas = document.createElement("canvas");
    this.element.appendChild(this.canvas);
    if (this.properties.progressive) {
      this.progressiveDraw(this.percent);
    }
    else {
      this.drawDonut(this.percent);
    }
  }

  private progressiveDraw(value) {
    let count = 0;
    let interval = setInterval(() => {
      //this.drawDonut(count);
      this.drawDonut(this.easing(count, 0, value, 100));
      count += 1;
      if (count >= 100) {
        this.drawDonut(value);
        clearInterval(interval);
      }
    }, 20);
  }

  private drawDonut(value) {
    var ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');
    ctx.canvas.width = this.properties.size;
    ctx.canvas.height = this.properties.size;
    ctx.lineWidth = this.properties.lineWidth;
    var x = this.properties.size / 2;
    var y = this.properties.size / 2;
    var clockwise = true;
    var radius = this.properties.size / 2 - 10;
    var startOffset = -0.5 * Math.PI;
    var valuePos = (value / 100) * 2 * Math.PI;
    //ctx.fillRect(0, 0, 100, 100);
    ctx.clearRect(0, 0, 100, 100);
    // base
    ctx.strokeStyle = this.properties.secondaryLineColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, startOffset, 1.5 * Math.PI, !clockwise);
    ctx.stroke();

    // value
    ctx.strokeStyle = this.properties.mainLineColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, -0.5 * Math.PI, startOffset + valuePos, !clockwise);
    ctx.stroke();

    ctx.fillStyle = this.properties.textColor;
    ctx.font = "bold 20px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(Math.round(value) + '%', x, y);
  }

  private easing(t, b, c, d) {
    t = t / (d / 2);
    if (t < 1) {
      return c / 2 * t * t + b;
    }
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  }
}
