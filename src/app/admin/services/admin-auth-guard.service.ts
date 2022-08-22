import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthService, private userService: UserService) { }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  //  Observable<boolean> {
  //   return this.auth.user$.pipe(switchMap(async (user) => this.userService.get(user.uid)),
  //   .map(appUser => appUser))
  // }

}
