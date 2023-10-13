import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    // Creation de notre formulaire reactive
    this.snapForm = this.formbuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null]
    });

    // Branchement de l'observable aux changements de valeurs du formulaire avec son attribut valueChanges
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    );
      
  }

  onSubmitForm(): void {
    console.log(this.snapForm.value);
  }

}
