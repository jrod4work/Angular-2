import { Component, OnInit } from '@angular/core';
import { AbilidadesModel } from '../models/skill2';
import { Nivel } from '../types/nivel.enum';
import { Skills2Service } from '../services/skills2.service';



@Component({
  selector: 'app-skills2',
  templateUrl: './skills2.component.html',
  styleUrls: ['./skills2.component.css']
})
export class Skills2Component implements OnInit {
  Abilidades: AbilidadesModel [];
  
  constructor(private skills2Service: Skills2Service) {
    this.Abilidades =  skills2Service.Abilidades;
   }

  ngOnInit() {
  }

}
