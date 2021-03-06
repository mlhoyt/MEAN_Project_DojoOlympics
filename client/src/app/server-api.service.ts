import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerApiService {
  constructor(
    private _http: Http
  )
  {
  }

  get_all_categories() {
    return this._http.get( '/actions/get_all_categories ' )
      .map( data => data.json() )
      .toPromise();
  }

  get_exam_by_category(id) {
    return this._http.get(' /actions/get_exam_by_category/' + id)
    .map( data => data.json() )
    .toPromise();
  }
  
  // create( item ) { return this._http.post( '{{URL}}', item ).map( data => data.json() ).toPromise(); }
  // read_all() { return this._http.get( '{{URL}}' ).map( data => data.json() ).toPromise(); }
  // read_one( pk ) { return this._http.get( '{{URL}}/' ).map( data => data.json() ).toPromise(); }
  // update( item, pk ) { return this._http.put( '{{URL}}/', item ).map( data => data.json() ).toPromise(); }
  // delete( pk ) { return this._http.delete( '{{URL}}/' ).map( data => data.json() ).toPromise(); }
}
