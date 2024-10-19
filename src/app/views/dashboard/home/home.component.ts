import { Component, OnInit } from '@angular/core';
import { PendingsComponent } from './pendings/pendings.component';
import { TipsComponent } from './tips/tips.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [PendingsComponent, TipsComponent],
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
