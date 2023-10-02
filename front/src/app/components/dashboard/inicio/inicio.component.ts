import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mostrarCard = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarCard = true;
    }, 2000);


  }

}
