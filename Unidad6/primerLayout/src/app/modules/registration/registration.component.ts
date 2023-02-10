import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  // tallas para el atributo size
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  // datos de ejemplo
  model = new Person(1, "Andrea", "Vieira", "andrea@correo.com", this.sizes[4], "MyClub");

  // control de formulario enviado por defecto falso
  submitted = false;

  // cuando se envía el formulario, se establece a enviado
  onSubmit() {this.submitted = true;}

  // método para inicializar una nueva persona
  newPerson(){
    this.model = new Person(2, "","","","");
  }
}
