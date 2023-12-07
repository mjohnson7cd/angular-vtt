import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import {NgOptimizedImage} from "@angular/common";
import { GameAreaComponent } from './game-area/game-area.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameAreaComponent,
    GameAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
