import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, NavController, IonButton, IonIcon, IonDatetimeButton, IonItem, IonLabel, IonInput, IonTextarea, IonModal, IonList, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";
import { Note, NoteDetail } from '../../../../shared/models/note-detail.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteStatus } from '../../../../shared/enums/note-status.enum';
import { DateFormatPipe } from "../../../../shared/pipes/date-format.pipe";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonList, IonModal, IonTextarea, IonInput, IonLabel, IonItem, IonDatetimeButton, IonIcon, IonButton, IonContent, IonTitle, IonBackButton, IonButtons, IonToolbar, IonHeader, CommonModule, FormsModule, DateFormatPipe]
})
export class NoteComponent  implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;

  public noteId: number = 0;
  public notes: NoteDetail;
  public description: string = "";
  public openModalNote: boolean = false;
  public category: string = ""
  imagePreview: string | null = null;
  camera = false;
  voice = false;
  text = false;
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
    // const storedImage = localStorage.getItem('image');
    // if (storedImage) {
    //   this.imagePreview = storedImage;
    // }
    // console.log('Note ID:', this.noteId); 
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
      } else {
        if(this.imagePreview) {
        const payload:Note = {status: NoteStatus.active, data: this.imagePreview, date: new Date().toISOString()}
        this.notes.notes.push(payload)
        localStorage.setItem(this.noteId.toString(), JSON.stringify(this.notes))
        this.imagePreview = null;
        }
      }
    }
    this.openModalNote = false
    window.location.reload();

  }
  onClickModalVoice(){
    this.openModalNote = true
    this.camera = false
    this.text = false
    this.voice = true
  }
  onClickModalText(){
    this.openModalNote = true
    this.camera = false
    this.text = true
    this.voice = false
  }

  onClickModalImage(){
    this.openModalNote = true
    this.camera = true
    this.text = false
    this.voice = false
  }
  removeElement(index: number ){
    if (index > -1 && index < this.notes.notes.length) {
      this.notes.notes.splice(index, 1);
      localStorage.setItem(this.noteId.toString(), JSON.stringify(this.notes))
      window.location.reload();
    }
    // console.log(this.notes.notes[index])
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        // Mostrar la imagen en el preview
        this.imagePreview = reader.result as string;

        // Guardar la imagen en el localStorage
        // localStorage.setItem('image', this.imagePreview);
      };

      // Leer el archivo como Data URL
      reader.readAsDataURL(file);
    }
  }
  
}
