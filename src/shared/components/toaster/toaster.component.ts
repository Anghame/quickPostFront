import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: 'toaster.component.html',
  styleUrls: ['toaster.component.css'],
})
export class ToasterComponent implements OnDestroy {
  toastMessage: string = '';
  toastType: 'success' | 'error' | 'warning' | undefined;
  fadeInAnimation: boolean = false;
  fadeOutAnimation: boolean = false;
  isHidden: boolean = true;  
  private subscription: Subscription;
  progressPercentage: number = 100; 

  constructor(private toasterService: ToasterService) {
    this.subscription = this.toasterService.getToastSubject().subscribe(data => {
      this.toastMessage = data.message;
      this.toastType = data.type;
      this.fadeInAnimation = true;
      this.isHidden = false;  

      const intervalDuration = 3000; 
      const intervalIncrement = 100; 
      const steps = intervalDuration / intervalIncrement; 
      let currentStep = 0; 

      const countdownInterval = setInterval(() => {
        currentStep++;
        this.progressPercentage = 100 - (currentStep / steps) * 100;

        if (currentStep >= steps) {
          clearInterval(countdownInterval);
          this.fadeOutAnimation = true;
          setTimeout(() => {
            this.toastMessage = '';
            this.fadeInAnimation = false;
            this.fadeOutAnimation = false;
            this.progressPercentage = 100; 
            this.isHidden = true;  
          }, 500);  
        }
      }, intervalIncrement);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
