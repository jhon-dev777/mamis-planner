import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonLabel, IonContent } from "@ionic/angular/standalone";
import { DateFormatPipe } from '../../../../shared/pipes/date-format.pipe';

@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.component.html',
  styleUrls: ['./pendings.component.scss'],
  standalone: true,
  imports: [IonContent, IonLabel, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, CommonModule, DateFormatPipe],
})
export class PendingsComponent  implements OnInit,OnChanges {
  public category: any;
  public pendingsList: any;
  constructor() { 
    const cat = localStorage.getItem("category");
    const pendings = [];
    if (cat) {
      this.category = JSON.parse(cat)
      if (this.category.length > 0) {
        const notes = localStorage.getItem(this.category[0].id.toString());
        if (notes) {
          this.pendingsList = JSON.parse(notes);
          console.log(this.pendingsList)
        }
      }
    }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
