import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoUserComponent implements OnInit{
  currentUser: any;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
    console.log("local storage: ", this.currentUser)
    if (this.currentUser && this.currentUser.id) {
      this.authService.getUserInfo(this.currentUser.id).subscribe(
        (user: User) => {
          this.currentUser = user; // Actualiza currentUser con la información completa del usuario
          console.log("Usuario actual: ", this.currentUser);
        },
        (error) => {
          console.error("Error al obtener la información del usuario: ", error);
        }
      );
    }
  }

}
