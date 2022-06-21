import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // must set these
        'x-rapidapikey': 'key',
        'x-rapidapi-host': 'host'
      },
      setParams: {
        key: 'key'
      }
    })
    return next.handle(req);
  }

}