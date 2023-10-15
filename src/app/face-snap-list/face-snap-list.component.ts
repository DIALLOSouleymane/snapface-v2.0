import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

import { FaceSnapService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  constructor(private faceSnapsService: FaceSnapService) { }

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }

}
