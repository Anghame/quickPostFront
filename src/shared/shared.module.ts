import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './components/toaster/toaster.component';
import { SpashScreenComponent } from './components/spash-screen/spash-screen.component';
import { TranslateModule } from '@ngx-translate/core';
import { PatternVerificatorComponent } from './components/pattern-verificator/pattern-verificator.component';


@NgModule({
  declarations: [
    ToasterComponent,
    

 
    SpashScreenComponent,PatternVerificatorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SpashScreenComponent,ToasterComponent,PatternVerificatorComponent
  ]
})
export class SharedModule { }
