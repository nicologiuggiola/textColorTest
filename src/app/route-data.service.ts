import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouteDataService implements Resolve<string[]> {

  constructor() { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]>{
    return of(["text", "color", "print"]);
  }
}

export interface RouteData{
  strings: string[]
}