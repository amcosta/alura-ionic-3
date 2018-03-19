import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Carro} from "../../model/carro";
import {CarroProvider} from "../../providers/carro/carro";
import {EscolhaPage} from "../escolha/escolha";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public carros: Carro[];

    constructor(public navCtrl: NavController,
                private _carroProvider: CarroProvider,
                private _loadingCtrl: LoadingController,
                private _alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        let loader = this._loadingCtrl.create({
            content: 'Carregando as informações dos carros'
        });

        loader.present()

        this._carroProvider.lista()
            .subscribe(
                (carros: Carro[]) => {
                    this.carros = carros;
                    loader.dismiss();
                },
                (error: HttpErrorResponse) => {
                    console.error(error);
                    loader.dismiss();

                    this._alertCtrl.create({
                        title: 'Falha na conexão',
                        subTitle: 'Não foi possível carregar as informações da lista de carro, tente novamente mais tarde!',
                        buttons: [
                            {text: 'Ok'}
                        ]
                    }).present();
                }
            );
    }

    selecionaCarro(carro) {
        this.navCtrl.push(EscolhaPage.name, {carroSelecionado: carro});
    }
}
