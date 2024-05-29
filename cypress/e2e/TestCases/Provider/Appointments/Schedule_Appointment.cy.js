/// <reference types="Cypress"/>

import {ScheduleSession} from "../../../Pages/Provider/Appointment/Schedule_Appointment"
import { loginAsProvider } from "../../../utils/Login";


const schedule_NewSession = new ScheduleSession();

describe('Provider Scheduling Functionality', () => {
    beforeEach(() => {
      loginAsProvider('provider1'); 
    });


    it('TC01: Schedule and start an instant session with a member',()=>{
      cy.fixture('Provider_appointment').then((data) => {
        schedule_NewSession.sidebar_Schedule();
        schedule_NewSession.newAppointment();
        schedule_NewSession.searchBar(data.memName);
        schedule_NewSession.memberSelection();
        schedule_NewSession.continueTOnext();
        schedule_NewSession.careTeam2();
        schedule_NewSession.memberContinue();
        schedule_NewSession.sessionSelection2();
        schedule_NewSession.sessionContinue();
        schedule_NewSession.startInstantSession();
        schedule_NewSession.startInstantSession_button();        
    });


    
    });

});
