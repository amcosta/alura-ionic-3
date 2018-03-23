import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Carro} from "../../model/carro";
import {Acessorio} from "../../model/acessorio";
import {CadastroPage} from "../cadastro/cadastro";

@IonicPage()
@Component({
    selector: 'page-escolha',
    templateUrl: 'escolha.html',
})
export class EscolhaPage {

    public carro: Carro;
    public acessorios: Acessorio[];
    public total = 0;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.carro = this.navParams.get('carroSelecionado');

        this.acessorios = [
            {nome: 'Acessorio A', preco: 750},
            {nome: 'Acessorio B', preco: 1850},
            {nome: 'Acessorio C', preco: 370},
            {nome: 'Acessorio D', preco: 699}
        ];

        this.total = this.carro.preco;
    }

    public atualizaTotal(checked: boolean, acessorio: Acessorio) {
        console.log('chegou aqui');
        console.log(checked);

        this.total = checked ?
            this.total + acessorio.preco :
            this.total - acessorio.preco;
    }

    public paginaCadastro() {
        let params = {carroSelecionado: this.carro, precoTotal: this.total};
        this.navCtrl.push(CadastroPage.name, params);
    }
}
