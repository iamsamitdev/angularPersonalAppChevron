import { Component } from '@angular/core'
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // FormGroup
  loginForm!: FormGroup
  submitted = false

  userLogin = {
    "email": "",
    "password": ""
  }

  // Constructor
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  // ngOnInit
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // Event handler for form submission
  submitLogin(){
    // Set submitted to true
    this.submitted = true

    // Invalid form
    if(this.loginForm.invalid){
      return
    } else {
      // ทดสอบให้มีค่าเริ่มต้น
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password

      // ถ้าข้อมูลถูกต้อง
      if(
        this.userLogin.email == 'admin@email.com' && 
        this.userLogin.password == '123456'
      ){
        alert('Login success')
        // ส่งไปหน้า dashboard
        this.router.navigate(['/backend/dashboard'])
      }else{
        alert('Login failed')
      }
    }
    
  }

  // Reset form
  resetForm(){
    this.submitted = false
    this.loginForm.reset()
  }

  copyright: string = '©2021-2025'

}
