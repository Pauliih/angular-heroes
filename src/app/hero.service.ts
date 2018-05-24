import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  // Retorna los heroes mockeados
  getHeroes(): Observable<Hero[]>{
    // Envía el mensaje _after_ fetching the Heroes.
    this.messageService.add('HeroService: fetched heroes');
    // of(HEROES) devuelve un "Observable<Hero[]>" que emite
    // un solo valor, el array de(of) heroes mockeados.
    return of(HEROES);
  }
}