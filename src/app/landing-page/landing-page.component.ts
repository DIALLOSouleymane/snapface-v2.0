import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  // Injection du router
  constructor(private router: Router) { }

  ngOnInit(): void {
      
  }

  // methode de navigation par url à travers le routeur : 
  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

}
