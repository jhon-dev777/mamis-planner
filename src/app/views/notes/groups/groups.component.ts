import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent, IonItem, IonInput, IonList, IonTextarea, IonLabel, IonDatetime, IonDatetimeButton } from "@ionic/angular/standalone";
import { Category } from '../../../shared/models/category.model';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ background: "red" }),
        animate("1s ease-out", style({})),
      ]),
    ]),
  ],
  imports: [ColorPickerModule , CommonModule, IonDatetimeButton, IonDatetime, IonLabel,  FormsModule, IonTextarea, IonList, IonInput, IonItem, IonContent, IonTitle, IonButtons, IonToolbar, IonHeader, IonModal, IonIcon, IonButton, CategoryComponent],
  standalone: true,
})

export class GroupsComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string | undefined;
  description: string | undefined;
  color: string | undefined;
  colorPicker = "";
  myDate: any;
  colors = ["red", "blue"]
  public groups: Category[];
  constructor() { 
    // console.log(localStorage.getItem("category") || "")
    const gr = localStorage.getItem("category")
    if (gr) {
      this.groups = JSON.parse(localStorage.getItem("category") || "")
    } else {
      this.groups = []
    }
    // if(!this.groups){
    //   this.groups = [{ title: "Casa", description: "facturas, reparaciones, nuevas compras, otros", color: "red" }, { title: "Universidad", description: "apuntes, aulas, docentes, otros", color: "blue" }, { title: "personal", description: "varias", color: "gren" }];
    // }
  }

  ngOnInit() { }
  // public onClick() {
  //   this.groups.push({ title: "Casa", description: "facturas, reparaciones, nuevas compras, otros", color: "red" })
  // }

  cancel() {
    if(this.modal){
      this.modal.dismiss(null, 'cancel');
    }
  }

  confirm() {
    if(this.modal){
      this.modal.dismiss(this.name, 'confirm');
      if(this.name && this.description && this.colorPicker) {
        console.log(this.myDate)
        if(!this.myDate) {
          this.myDate = new Date().toISOString();
        }
        const id = Math.floor(Math.random()* 1000);
        this.groups.push({title: this.name, description: this.description, color: this.colorPicker, date: this.myDate, id})
        localStorage.setItem("category", JSON.stringify(this.groups))
        localStorage.setItem(id.toString(), JSON.stringify({notes: [], title: this.name}))
        this.clean()
      }
    }
  }

  clean() {
    this.name = ""
    this.description = ""
    this.color = ""
    this.myDate = null
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
