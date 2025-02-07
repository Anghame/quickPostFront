import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './components/toaster/toaster.component';
import { InputPatternValidatorComponent } from './components/input-pattern-validator/input-pattern-validator.component';
import { SelectLangComponent } from './components/select-lang/select-lang.component';
import { SpashScreenComponent } from './components/spash-screen/spash-screen.component';
import { TranslateModule } from '@ngx-translate/core';
import { PatternVerificatorComponent } from './components/pattern-verificator/pattern-verificator.component';


@NgModule({
  declarations: [
    ToasterComponent,
    
    InputPatternValidatorComponent,
    SelectLangComponent,
    SpashScreenComponent,PatternVerificatorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    SpashScreenComponent,ToasterComponent,InputPatternValidatorComponent,PatternVerificatorComponent
  ]
})
export class SharedModule { }
