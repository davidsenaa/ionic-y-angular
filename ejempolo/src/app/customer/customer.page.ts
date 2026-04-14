import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem, IonLabel, IonList, IonHeader, IonTitle, IonToolbar,
  IonSegment, IonSegmentButton, IonSegmentView, IonSegmentContent,
  IonAlert, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent,
    IonItem, IonLabel, IonList, IonHeader, IonTitle, IonToolbar,
    IonSegment, IonSegmentButton, IonSegmentView, IonSegmentContent,
    IonAlert, IonButton
  ]
})
export class CustomerPage implements OnInit {

  segmento: string = 'primero';

  alertButtons = [
    { text: 'Cancelar', role: 'cancel' },
    { text: 'Confirmar', handler: () => console.log('Confirmado') },
  ];

  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}