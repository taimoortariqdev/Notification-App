import { Component,ViewChild } from '@angular/core';
import { NavController,MenuController,App,Nav } from 'ionic-angular';
import { AngularFire } from "angularfire2";


import { Dashboard } from "../dashboard/dashboard";
import { ProfilePage } from "../profile/profile";
import { LoginPage } from "../login/login";


/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  rootPage: any  = Dashboard;
  @ViewChild(Nav) nav: Nav;

  pages : Array<{title : string, component: any}>
  constructor(public af: AngularFire,public navCtrl: NavController,app: App,public menu: MenuController) {

 this.pages = [
   {title : 'Share Something..', component: status},
   {title : 'Profile' , component: ProfilePage},
   {title : 'Logout', component: ""}
   ]
  }

 openPage(page){
if(page.title == 'Logout'){
  localStorage.removeItem('key');
   this.af.auth.logout();
   this.navCtrl.setRoot(LoginPage)
  }
else { 
  this.nav.setRoot(page.component)
}
this.menu.close()
 }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }
// logout(){


// }
}