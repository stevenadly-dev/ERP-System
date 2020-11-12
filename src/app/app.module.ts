// =============modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

//======components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LeftSideBarComponent } from './shared/components/left-side-bar/left-side-bar.component';
import { RightSideBarComponent } from './shared/components/right-side-bar/right-side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicTabsComponent } from './shared/components/dynamic-tabs/dynamic-tabs.component';
// import { CompanyTransactionComponent } from './finance/common/company-transaction/company-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSideBarComponent,
    RightSideBarComponent,
    DynamicTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
