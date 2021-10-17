import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CountDownTimerComponent],
  bootstrap: [AppComponent],
  exports: [CountDownTimerComponent],
})
export class AppModule {}
