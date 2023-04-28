import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryItemModule } from 'src/app/components/category-item/category-item.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CategoryItemModule // Adicione o módulo aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
