import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightDirective } from './highlight.directive';
import { VotesComponent } from './votes/votes.component';
import { NgVoteComponent } from './ng-vote/ng-vote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    DateCountPipe,
    QuoteFormComponent,
    HighlightDirective,
    VotesComponent,
    NgVoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
