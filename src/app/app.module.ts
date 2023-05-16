import { initializeApp } from 'firebase/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';
//import{AngularFireModule}from'@angular/fire';
//import{AngularFirestoreModule}from'@angular/fire/firestore';
//import{firebaseConfig}from'./services/firebase';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CategoryItemModule // Adicione o módulo aqui
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
