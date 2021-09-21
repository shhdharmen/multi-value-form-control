import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Telephone } from "./shared/directives/input-tel.directive";

@Component({
  selector: "app-root",
  template: `
    <div class="container mt-3 d-flex justify-content-center w-50">
      <div>
        <div class="mb-3">
          <input
            type="tel"
            name="telephone"
            id="telephone"
            [formControl]="telephone"
            class="form-control"
            autocomplete="off"
            [class.is-invalid]="
              (telephone?.touched || telephone?.dirty) && telephone?.invalid
            "
          />
          <div
            class="invalid-feedback d-block"
            *ngIf="(telephone.touched || telephone.dirty) && telephone.invalid"
          >
            Invalid Telephone
          </div>
        </div>
        <code class="d-block bg-dark p-2 rounded text-light">{{
          telephone.value | json
        }}</code>
      </div>
    </div>
  `,
})
export class AppComponent {
  telephone = new FormControl(new Telephone("", ""));
}
