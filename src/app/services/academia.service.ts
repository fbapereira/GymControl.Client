import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { GCHTTPService } from './GC-Http.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Academia } from '../models/academia';

@Injectable()
export class AcademiaService {

    oAcademia: Academia;

    constructor(private GCHTTP: GCHTTPService) { }

    public GetAcademia(oUsuario: Usuario): Observable<Academia[]> {
        return this.GCHTTP.Post('ObtemAcademiaUsuario', oUsuario);
    }

    public AdicionaUsuario(oUsuario: Usuario, oAcademia: Academia): Observable<Boolean> {
        return this.GCHTTP.Put('AdicionaUsuarioAcademia/' + oAcademia.Id, oUsuario);
    }
}
