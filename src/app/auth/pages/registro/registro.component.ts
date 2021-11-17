import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public registroForm = this.fb.group({
    nombre: [undefined, Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    apellidoPaterno: [undefined, Validators.required, Validators.minLength(2),Validators.maxLength(30)],
    apellidoMaterno: [undefined, Validators.required, Validators.minLength(2),Validators.maxLength(30)],


  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
