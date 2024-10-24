import { Component, OnInit } from '@angular/core';
import { IonContent, IonTabButton, IonCard, IonLabel, IonItem, IonButtons, IonIcon, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonButtons, IonItem, IonLabel, IonCard, IonTabButton, IonContent, ],
})
export class CalendarComponent  implements OnInit {
  
  constructor() { }
  
  ngOnInit() {}
  
  clearLocalStorage(): void {
    localStorage.clear();
    alert("Registros borrados")
    window.location.reload();
    console.log('LocalStorage ha sido limpiado');
    // Si es necesario, puedes agregar más lógica después de limpiar el localStorage
  }
  onClick() {
    throw new Error('Method not implemented.');
  }
  goToCalendar() {
    alert("Se implementara mas adelente :)")
  }
}
