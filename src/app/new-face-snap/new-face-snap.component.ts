import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { Observable, map, tap } from 'rxjs';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formbuilder: FormBuilder,
    private faceSnapService: FaceSnapService,
    private router: Router) { }

  ngOnInit(): void {
    // Initialisation du regExp avec un pattern : cela nous rassure que le contenu du champ url ressemble bien à un url
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    // Creation de notre formulaire reactive
    this.snapForm = this.formbuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      /* Changement du rythme des émissions de notre formulaire : modification du déclenchement de 
      valueChanges. 
      En effet cela nous evite les requetes inutiles tant que le renseignement de l'url n'est 
      pas complète (Ainsi l'url ne sera attribué comme source d'image qu'à la terminaison de la saisie ; 
      ce qui prévient par conséquent les erreurs 404 ou encore des requetes vers des sources 
      non souhaitées.
      */
      updateOn: 'blur'
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
    this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
  }

}
