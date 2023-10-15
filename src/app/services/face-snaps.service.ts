import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {

    constructor(private http: HttpClient) { }

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'La poupée de ma grand-mère',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'Dakar'
        },
        {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les rendonnées',
            imageUrl: '../assets/White_Rock_Mountain.jpg',
            createdDate: new Date(),
            snaps: 200,
            location: 'Paris'
        },
        {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh, Que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 19
    
        },
        {
            id: 4,
            title: 'La poupée de ma grand-mère',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'Dakar'
        },
        {
            id: 5,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les rendonnées',
            imageUrl: '../assets/White_Rock_Mountain.jpg',
            createdDate: new Date(),
            snaps: 200,
            location: 'Paris'
        },
        {
            id: 6,
            title: 'Un bon repas',
            description: 'Mmmh, Que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 19
    
        }
      ];

      getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
      }

      getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        // const faceSnap = this.getFaceSnapById(faceSnapId);
        // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string}) {
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id +1
        };this.faceSnaps.push(faceSnap);
    }
}