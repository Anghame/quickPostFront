import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  toggleProfile(): void {
    const profile = this.el.nativeElement.querySelector('.profile');
    profile.classList.toggle('active');
    this.closeNotifications();
  }

  toggleNotifications(): void {
    const notifications = this.el.nativeElement.querySelector('.notifications');
    notifications.classList.toggle('active');
    this.closeProfile();
  }

  showAllNotifications(): void {
    const popup = this.el.nativeElement.querySelector('.popup');
    popup.style.display = 'block';
  }

  closePopup(): void {
    const popup = this.el.nativeElement.querySelector('.popup');
    popup.style.display = 'none';
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.closeProfile();
      this.closeNotifications();
    }
  }

  private closeProfile(): void {
    const profile = this.el.nativeElement.querySelector('.profile');
    profile.classList.remove('active');
  }

  private closeNotifications(): void {
    const notifications = this.el.nativeElement.querySelector('.notifications');
    notifications.classList.remove('active');
  }
}
