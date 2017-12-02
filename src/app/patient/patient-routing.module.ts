import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { PatientConstants } from './shared/patient.config';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

const patientRoutes: Routes = [
    {
        path: 'patient',
        canActivate: [AuthGuard],
        component: PatientListComponent,
        data: {
            title: PatientConstants.PATIENT_TITLE
        }
    },
    {
        path: 'createpatient',
        canActivate: [AuthGuard],
        component: PatientFormComponent,
        data: {
          title: PatientConstants.API_CREATE_PATIENT
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(patientRoutes)
    ],

    exports: [
        RouterModule
    ]
})

export class PatientRoutingModule {}
