import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;
  error: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm){
    this.authService.register(form.value).subscribe(response => {
      console.log(response);
      if(response.error){
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 5000);
      } else {
        this.message = 'User registered successfully. Please Login'; 
        setTimeout(() => {
          this.message = null;
        }, 5000);
      }
      form.reset();
    });
  }

}
