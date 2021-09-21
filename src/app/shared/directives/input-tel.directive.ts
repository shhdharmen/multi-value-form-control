import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "input[type=tel]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTelDirective,
      multi: true,
    },
  ],
})
export class InputTelDirective implements ControlValueAccessor {
  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    private _renderer: Renderer2
  ) {}

  @HostListener("input", ["$event.target.value"])
  onInput = (_: any) => {};

  writeValue(value: Telephone | null): void {
    const telephone = value || new Telephone("", "");
    this._renderer.setAttribute(
      this._elementRef.nativeElement,
      "value",
      telephone.toString()
    );
  }
  registerOnChange(fn: any): void {
    this.onInput = (value: string) => {
      let telephoneValues = value.split("-");
      const telephone = new Telephone(
        telephoneValues[0],
        telephoneValues[1] || ""
      );
      fn(telephone);
    };
  }
  registerOnTouched(fn: any): void {}
}

export class Telephone {
  constructor(public countryCode: string, public phoneNumber: string) {}
  toString() {
    return this.countryCode && this.phoneNumber
      ? `${this.countryCode}-${this.phoneNumber}`
      : "";
  }
}
