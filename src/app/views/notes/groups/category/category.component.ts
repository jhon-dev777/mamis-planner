import { Component, Input, OnInit } from '@angular/core';
import { IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonLabel, IonItem } from "@ionic/angular/standalone";
import { Category } from '../../../../shared/models/category.model';
import { DateFormatPipe } from '../../../../shared/pipes/date-format.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [IonItem, IonLabel, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCardContent, DateFormatPipe],
  standalone: true
})
export class CategoryComponent  implements OnInit {
  @Input() public category: Category | undefined;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToNote() {
    if (this.category) {
      this.router.navigate(['/note-details', this.category.id]);
    }
    console.log(this.category)
  }

}
