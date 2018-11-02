import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { Skills2Component } from './skills2/skills2.component';
import { SkillsService } from './services/skills.service';
import { Skills2Service } from './services/skills2.service';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    Skills2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillsService, Skills2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
