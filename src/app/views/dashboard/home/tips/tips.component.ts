import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonFabButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
  standalone: true,
  imports: [IonFabButton, IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,],
})
export class TipsComponent implements OnInit {
  iconName = "heart-out"
  public tips = [
    { like:false, title: "Establece metas claras y alcanzables", description: "Define objetivos específicos tanto para tu vida profesional como personal. Esto te permitirá priorizar y mantener un equilibrio entre ambos roles." },
    { like:false, title: "Apóyate en la tecnología", description: "Usa aplicaciones de organización, gestión de tiempo y recordatorios para optimizar tu productividad, como Trello, Google Calendar o herramientas para emprendedores." },
    { like:false, title: "Prioriza el autocuidado", description: "Dedica tiempo para ti misma, aunque sea breve. El autocuidado te permitirá mantener un buen nivel de energía y un enfoque positivo para tus proyectos y tu familia." },
    { like:false, title: "Desarrolla una rutina y sé flexible", description: "Una rutina te ayuda a crear estabilidad, pero ser flexible es clave para adaptarte a imprevistos. Organiza tus días con espacio para reajustes según sea necesario." },
    { like:false, title: "Involucra a tu familia", description: "Comparte tus metas y sueños con tu familia, incluyendo a tus hijos. Al involucrarlos, podrán comprender tu visión y, en algunos casos, hasta ayudarte." },
    { like:false, title: "Establece límites claros", description: "Define cuándo es tiempo de trabajo y cuándo es tiempo de familia. Esto ayudará a que todos comprendan tus horarios y a que puedas dedicarte a cada área sin distracciones." },
    { like:false, title: "Haz networking con otras mamás emprendedoras", description: "Busca conectar con mujeres en situaciones similares. Esto puede brindarte apoyo emocional y abrir puertas para colaboraciones y aprendizaje mutuo." },
    { like:false, title: "Aprende a delegar", description: "No intentes hacerlo todo tú misma. Aprende a delegar en el trabajo y en casa para reducir tu carga y concentrarte en las áreas donde realmente eres imprescindible." },
    { like:false, title: "Haz pausas cortas y productivas", description: "Incorpora descansos breves para recargar energía. Utiliza estos momentos para estiramientos, respiración profunda o una breve caminata para mejorar tu rendimiento." },
    { like:false, title: "No temas pedir ayuda", description: "Recuerda que no estás sola. A veces, pedir ayuda a amigos, familiares o colegas es esencial para mantener el equilibrio y avanzar en tus proyectos y responsabilidades como madre." }
  ]; 
  public tip: any;
  constructor() {
    const randomIndex = Math.floor(Math.random() * this.tips.length);
    this.tip = this.tips[randomIndex];
  }

  ngOnInit() { }

  onClick() {
    this.iconName = "heart"
  }

}
