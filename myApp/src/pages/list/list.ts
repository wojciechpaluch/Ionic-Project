import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemApi } from '../../services/service';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Http]
})


export class ListPage {


  items: any;


  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              private itemApi: ItemApi,
              public loadingController: LoadingController
            ) {}


  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: "Getting items.."
    });
    loader.present();

    this.itemApi.getItems().then(data => {
        loader.dismiss();
        this.items = data
    });
  }


  getItems(searchbar) {


    var q = searchbar.srcElement.value;


    if (!q) {


      let loader = this.loadingController.create({
        content: "Getting items.."
      });
      loader.present();


      this.itemApi.getItems().then(data => {
        loader.dismiss();
        this.items = data
      });
    }

    this.items = this.items.filter((v) => {
      if(v.title && q) {
        if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }


}
