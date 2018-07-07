import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import { MarketChartComponent } from './market-chart/market-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketChartComponent,
    BarChartComponent,
    StackedBarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}