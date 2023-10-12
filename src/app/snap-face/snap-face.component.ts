import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';


@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {
  // Injection de FaceSnapService afin d'utiliser ses méthodes
  constructor(private faceSnapsService: FaceSnapService) { }
  // Création d'un objet injectable
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(): void {
      this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!'){
      // this.faceSnap.snaps ++;
      // Utilisation du service
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh Snap!';
    }
  }

}
