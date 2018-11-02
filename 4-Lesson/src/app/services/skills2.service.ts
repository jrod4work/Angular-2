import { Injectable } from '@angular/core';

import { AbilidadesModel } from '../models/skill2';
import { Nivel } from '../types/nivel.enum';

@Injectable({
  providedIn: 'root'
})
export class Skills2Service {
  Abilidades: AbilidadesModel [] = [
    {
      id: 0,
      nombre: 'Matematicas',
      nivel: Nivel.Experto
    },
    {
      id: 1,
      nombre: 'Filosofia',
      nivel: Nivel.Experto
    },
    {
      id: 2,
      nombre: 'Desarrollo de Software',
      nivel: Nivel.Principiante
    }
  ];
  constructor() { }
}
