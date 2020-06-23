import {NgForm,
        FormGroup,
        FormControl,
        Validators,
        FormBuilder} from '@angular/forms';
export class PatientModel
{
    PatientName : string = "";
    PatientProblem : string = "";
    // Step 1
    formPatientGroup : FormGroup = null;
    constructor(){
        // Tree structure
        var _builder = new FormBuilder();
        // Use the builder and create structure
        this.formPatientGroup = _builder.group({});
        // Add validation to FormGroup
        this.formPatientGroup.addControl("namecontrol",
        new FormControl('', Validators.required));
        // Add validation to patient problem
        this.formPatientGroup.addControl("problemcontrol",
        new FormControl('', Validators.required));
    }
}