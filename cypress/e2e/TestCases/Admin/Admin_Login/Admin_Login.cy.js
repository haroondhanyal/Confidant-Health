/// <reference types="Cypress"/>

import {CurrentAppointmentAssignEvaluations} from "../../../Pages/Admin/Appointments/Current_Appointments"
import { loginAsAdmin } from "../../../utils/Login";


const openCurrent_Appointment = new CurrentAppointmentAssignEvaluations ();

describe('Admin Appointment Management', () => {
    beforeEach(() => {
        const baseUrl = Cypress.env('baseUrl');
        cy.visit(baseUrl);
        openCurrent_Appointment.AdminSelection();
        cy.wait(3000)
       loginAsAdmin('admin1'); 
    });


    it('TC01: Open a scheduled appointment and view appointment details',()=>{
      cy.fixture('Current_Appointment').then((data) => {
        openCurrent_Appointment.Select_Appointments()
        openCurrent_Appointment.Current_Appointments()
        openCurrent_Appointment.Search_Provider1(data.pName1)
        // openCurrent_Appointment.Search_Member(data.mName)
        openCurrent_Appointment.Open_Appointment()
        openCurrent_Appointment.Assign_Evaluations()
        openCurrent_Appointment.searchEvaluation1(data.evalName1)
        openCurrent_Appointment.Evaluation1()
        openCurrent_Appointment.searchEvaluation2(data.evalName2)
        openCurrent_Appointment.Evaluation2()
        openCurrent_Appointment.searchEvaluation3(data.evalName3)
        openCurrent_Appointment.Evaluation3()
        openCurrent_Appointment.AddSelected_btn()
        openCurrent_Appointment.ViewEvaluation1()
        // openCurrent_Appointment.ViewEvaluation2()
        // openCurrent_Appointment.ViewEvaluation3()
        // openCurrent_Appointment.deleteEvaluation1()
        // openCurrent_Appointment.deleteEvaluation2()
        // openCurrent_Appointment.deleteEvaluation3()
        // openCurrent_Appointment.ViewExercise1()
        // openCurrent_Appointment.ViewExercise2()
        // openCurrent_Appointment.ViewExercise3()
        // openCurrent_Appointment.CancelEvaluation()
        // openCurrent_Appointment.MessageProvider()    
              
    });
  
    });

});
