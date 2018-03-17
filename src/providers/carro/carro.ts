import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Carro} from "../../model/carro";

@Injectable()
export class CarroProvider {

    constructor(private http: HttpClient) {
    }

    lista() {
        return this.http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos');
    }
}
