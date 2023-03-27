import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models';

@Component({
  selector: 'app-ejercicio-ngif-ngfor',
  templateUrl: './ejercicio-ngif-ngfor.component.html',
  styleUrls: ['./ejercicio-ngif-ngfor.component.css']
})
export class EjercicioNgifNgforComponent implements OnInit {
  public isLoading = true;
  public usuarios: Usuario[] = [
    new Usuario(1, 'Emmanuel', 'Gonzalez', 'emmanuel.gonzalez@gmail.com', 27, true, new Date('1996-03-08T00:00:00')),
    new Usuario(2, 'Joel', 'Madrid', 'joel.madrid@gmail.com', 27, true, new Date('1996-04-05T00:00:00')),
    new Usuario(3, 'Veronica', 'Galvan', 'veronica.galvanm@gmail.com', 26, false, new Date('1997-01-10T00:00:00')),
    new Usuario(4, 'Julian', 'Saucedo', 'julian.sau@gmail.com', 25, false, new Date('1998-04-22T00:00:00')),
    new Usuario(5, 'Ana', 'Serrato', 'ana.serrato@gmail.com', 27, true, new Date('1996-02-14T00:00:00')),
    new Usuario(6, 'Maria', 'Ayala', 'maria.ayala@gmail.com', 27, true, new Date('1996-11-25T00:00:00')),
    new Usuario(7, 'Jaime', 'Maldonado', 'jaime.mal@gmail.com', 25, true, new Date('1998-11-01T00:00:00')),
    new Usuario(8, 'America', 'Ibarra', 'ame.iba@gmail.com', 25, true, new Date('1998-07-23T00:00:00')),
    new Usuario(9, 'Brenda', 'Rodríguez', 'bren.rodr@gmail.com', 27, true, new Date('1996-06-22T00:00:00')),
    new Usuario(10, 'Sara', 'Najera', 'sarhn@gmail.com', 25, true, new Date('1996-11-25T00:00:00')),
    new Usuario(11, 'Karen', 'Gonzalez', 'kar.gonzalez@gmail.com', 24, false, new Date('1999-03-02T00:00:00')),
    new Usuario(12, 'Esperanza', 'Hernandez', 'esp450@gmail.com', 27, true, new Date('1996-01-25T00:00:00')),
    new Usuario(13, 'Rocio', 'Carmona', 'roca13@gmail.com', 27, false, new Date('1996-02-08T00:00:00')),
    new Usuario(14, 'Julio', 'Arce', 'julio.arce@gmail.com', 27, false, new Date('1996-04-11T00:00:00')),
    new Usuario(15, 'Santiago', 'Esquivel', 'santi08@mail.com', 21, true, new Date('1996-08-13T00:00:00')),
  ];
  ngOnInit(): void {
    // Este es el ciclo de vida ON INIT (al inicializarse) del componente...
    setTimeout(() => {
      this.isLoading=false;
    }, 2000);
  }
}
