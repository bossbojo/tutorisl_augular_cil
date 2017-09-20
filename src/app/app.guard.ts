import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
@Injectable()
export class AppGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(localStorage.getItem('authen')){
            return true;
        }
       return false;
    }
}