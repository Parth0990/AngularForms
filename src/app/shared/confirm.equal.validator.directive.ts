import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { SelectRequiredValidatorDirective } from "./select.required.validator.directive";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: confirmEqualValidatorDirective,
        multi: true
    }]
})
export class confirmEqualValidatorDirective implements Validator {
    @Input() appConfirmEqualValidator: string ;
    validate(control: AbstractControl): {[key: string]: any} | null {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if(controlToCompare && controlToCompare.value !== control.value){
            return { 'notEqual': true};
        }
        return null;
    }
}