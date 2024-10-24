import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { library, add, home, calendar, cameraOutline, pencilOutline, micOutline, trashOutline, hammerOutline, heartCircleOutline } from 'ionicons/icons';  // Import specific icons
import { Category } from './shared/models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IonicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'mamis-planner';
  alertButtons = ['Action'];
  // public groups: Category[] = [{ title: "Casa", description: "facturas, reparaciones, nuevas compras, otros", color: "red" }, { title: "Universidad", description: "apuntes, aulas, docentes, otros", color: "blue" }, { title: "personal", description: "varias cosas :)", color: "gren" }];

  constructor() {
    // localStorage.setItem("category", JSON.stringify(this.groups))
    addIcons({
      'home': home,
      'library': library,
      'add': add,
      'camera-outline': cameraOutline,
      "pencil-outline": pencilOutline,
      "mic-outline": micOutline,
      'calendar': calendar,
      "trash-outline": trashOutline,
      "hammer-outline": hammerOutline,
      "heart": heartCircleOutline
    });
  }
}
