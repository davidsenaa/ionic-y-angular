import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon, IonLabel, IonToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { moon } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonToggle,IonLabel,IonIcon,IonItem,IonContent,IonHeader,IonTitle,IonToolbar,CommonModule,FormsModule],
})

export class HomePage implements OnInit {

  constructor() {
    addIcons({ moon });
  }

  toggleDarkMode(event: any) {
    const darkMode = event.detail.checked;

    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  ngOnInit() {}
}