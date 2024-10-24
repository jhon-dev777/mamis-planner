import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, ],
})
export class TipsComponent  implements OnInit {
  public tips = [{title: "Planificación inteligente del tiempo", description: "Usa herramientas digitales como aplicaciones de calendario o listas de tareas para organizar el día y balancear el trabajo, la familia y el tiempo personal."}]
  public tip: any;
  constructor() { 
    this.tip = this.tips[0]
  }

  ngOnInit() {}

}
