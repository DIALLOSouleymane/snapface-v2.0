import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
      this.mySnap =  {
        title: 'La poupée de ma grand-mère',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Dakar'
      };
      this.myOtherSnap = {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les rendonnées',
        imageUrl: '../assets/White_Rock_Mountain.jpg',
        createdDate: new Date(),
        snaps: 200,
        location: 'Paris'
      };

      this.myLastSnap = {
        title: 'Un bon repas',
        description: 'Mmmh, Que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 19

      };
  }

}
