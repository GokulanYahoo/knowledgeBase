import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SListDetailsComponent } from './slistDetails/slistdetails.component';
import { routing } from './app.routing';
import { CommunicatorService } from './communication/communicator.service';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { ApiService } from './shared/api.service';
import { FilterPipe } from './app.filter';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { StringTruncatePipe } from './util/truncate';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent, HomeComponent,
        AboutComponent, ContactComponent, LoginComponent, SListDetailsComponent, FilterPipe, NavComponent, StringTruncatePipe
    ],
    providers: [
        ApiService,
        CommunicatorService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store) {
        console.log('HMR store', store);
    }
    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }
    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
