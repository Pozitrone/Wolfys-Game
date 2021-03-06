import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent, Inventory, Map, Statistics, Journal } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        Inventory,
        Map,
        Statistics,
        Journal
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        Inventory,
        Map,
        Statistics,
        Journal
    ]
})
export class AppModule { }
