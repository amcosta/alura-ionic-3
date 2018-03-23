import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Carro} from "../../model/carro";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cadastro',
    templateUrl: 'cadastro.html',
})
export class CadastroPage {

    public carro: Carro;
    public precoTotal: number;

    public nome: string = '';
    public email: string = '';
    public endereco: string = '';
    public data: string = new Date().toISOString();

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.carro = this.navParams.get('carroSelecionado');
        this.precoTotal = this.navParams.get('precoTotal');
    }

    public agenda() {
        console.log(this.nome);
        console.log(this.email);
        console.log(this.endereco);
        console.log(this.data);
    }
}
