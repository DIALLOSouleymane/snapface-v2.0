import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'La poupée de ma grand-mère',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Dakar'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les rendonnées',
        imageUrl: '../assets/White_Rock_Mountain.jpg',
        createdDate: new Date(),
        snaps: 200,
        location: 'Paris'
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh, Que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 19
  
      },
      {
        title: 'La poupée de ma grand-mère',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Dakar'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les rendonnées',
        imageUrl: '../assets/White_Rock_Mountain.jpg',
        createdDate: new Date(),
        snaps: 200,
        location: 'Paris'
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh, Que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 19
  
      }
    ];
  }

}
