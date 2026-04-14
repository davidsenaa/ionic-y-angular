import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
  standalone: true,
  imports: [IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSegment, IonSegmentView, IonSegmentContent]
})
export class CustomerPage implements OnInit {

  segmento: string= 'primero';

  constructor() { }

  ngOnInit() {
  }

}
