import { AuthService } from './../../../core/services/auth.service';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user :any = ''
  constructor(private el: ElementRef,private authService :AuthService) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
      //this.authorId=this.user._id
      console.log(this.user,"this.user");
    }
  }

  toggleProfile(): void {
    const profile = this.el.nativeElement.querySelector('.profile');
    profile.classList.toggle('active');
   
  }




  closePopup(): void {
    const popup = this.el.nativeElement.querySelector('.popup');
    popup.style.display = 'none';
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.closeProfile();
    }
  }

  private closeProfile(): void {
    const profile = this.el.nativeElement.querySelector('.profile');
    profile.classList.remove('active');
  }
logout(){
  this.authService.logout(); 
}

}
