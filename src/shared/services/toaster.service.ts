import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toastSubject = new Subject<{ message: string, type: 'success' | 'error' | 'warning' }>();

  constructor() {}

  getToastSubject() {
    return this.toastSubject.asObservable();
  }

  showToast(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    this.toastSubject.next({ message, type });
  }
}
