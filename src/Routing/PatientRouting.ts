import {PatientHomeComponent} from "../PatientApp/PatientHomePage.component"
import { PatientComponent } from 'src/PatientApp/PatientApp.component'
import { PatientSearchComponent } from 'src/PatientApp/PatientApp.search.component';


export const PatientRoutes = [
    {path :'', component : PatientHomeComponent },
    {path :'Home', component : PatientHomeComponent },
    {path :'Patient', component : PatientComponent },
    {path :'Search', component : PatientSearchComponent }
];