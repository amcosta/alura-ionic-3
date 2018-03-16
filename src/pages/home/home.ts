import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Carro} from "../../model/carro";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public carros: Carro[];

    constructor(public navCtrl: NavController, private _http: HttpClient) {
        this._http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
            .subscribe(
                (carros: Carro[]) => this.carros = carros,
                error => console.error(error)
            );
    }

}
