import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AppGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // if (localStorage.getItem('authen')) {
        //     return true;
        // }
        if (route.url[0].path === 'guard' && localStorage.getItem('authen')) {
            return true;
        }

        if (route.url[0].path !== 'guard') {
            if (localStorage.getItem('text')) {
                if (confirm('you want exit?')) {
                    localStorage.removeItem('text');
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}