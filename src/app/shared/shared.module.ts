import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputTelDirective } from "./directives/input-tel.directive";

@NgModule({
  declarations: [InputTelDirective],
  imports: [CommonModule],
  exports: [InputTelDirective],
})
export class SharedModule {}
