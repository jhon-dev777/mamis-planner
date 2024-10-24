import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, NavController, IonButton, IonIcon, IonDatetimeButton, IonItem, IonLabel, IonInput, IonTextarea, IonModal, IonList } from "@ionic/angular/standalone";
import { Note, NoteDetail } from '../../../../shared/models/note-detail.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteStatus } from '../../../../shared/enums/note-status.enum';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  standalone: true,
  imports: [IonList, IonModal, IonTextarea, IonInput, IonLabel, IonItem, IonDatetimeButton, IonIcon, IonButton, IonContent, IonTitle, IonBackButton, IonButtons, IonToolbar, IonHeader, CommonModule, FormsModule]
})
export class NoteComponent  implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;

  public noteId: number = 0;
  public notes: NoteDetail;
  public description: string = "";
  public openModalNote: boolean = false;
  public category: string = ""
  constructor(private route: ActivatedRoute, private navCtrl: NavController) { 
    this.notes = {notes:[], title: ""};
  }
  

  ngOnInit() {
    this.noteId = Number(this.route.snapshot.paramMap.get('id')) || 0;
    const notesLocal = localStorage.getItem(this.noteId.toString())
    if (notesLocal) {
      this.notes = JSON.parse(notesLocal)
      this.category = this.notes.title
    } else {
      this.notes = {notes:[], title: ""};
    }
    console.log('Note ID:', this.noteId); 
  }
  goBack() {
    this.navCtrl.back();  // Usa NavController para retroceder
  }

  addNote(){
    
  }

  cancel() {
    if(this.modal){
      this.modal.dismiss(null, 'cancel');
    }
    this.openModalNote = false
  }

  confirm() {
    if(this.modal){
      this.modal.dismiss(this.description, 'confirm');
      if( this.description) {
        const payload:Note = {status: NoteStatus.active, description: this.description, date: new Date().toISOString()}
        this.notes.notes.push(payload)
        localStorage.setItem(this.noteId.toString(), JSON.stringify(this.notes))
        this.description = "";
      }
    }
    this.openModalNote = false
  }

  onClickModal(){
    this.openModalNote = true
  }
}
