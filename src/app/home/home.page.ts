import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,IonButton,IonRow, } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,IonButton, IonRow],
})
export class HomePage {
  constructor() {}
}
