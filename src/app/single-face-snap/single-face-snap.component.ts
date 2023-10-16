import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  // Injection de FaceSnapService afin d'utiliser ses méthodes
  constructor(private faceSnapsService: FaceSnapService,
    private route: ActivatedRoute) { }
  // Création d'un objet injectable
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  ngOnInit(): void {
      this.buttonText = 'Oh Snap!';
      const snapId = +this.route.snapshot.params['id'];
      this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => this.buttonText = 'Oops, unSnap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => this.buttonText = 'Oh Snap!')
      );
    }
    
  }
}
