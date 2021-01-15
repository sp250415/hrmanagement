import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent

} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token = sessionStorage.getItem("token");
       if(token){
        //    const token = sessionStorage.getItem("jwt").replace(/\"/g,"");
           const cloned = request.clone({
               headers: request.headers.set('authorization',token)       
           });
           return next.handle(cloned);
       }else{
           console.log(request)
           return next.handle(request);
       }
    }

}
