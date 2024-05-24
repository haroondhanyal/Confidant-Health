const ScheduleAppointmentSessions = require ("../../../Locators/Appointments/Provider_Appointment.json")

export class ScheduleSession {
    sidebar_Schedule(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sidebar_Schedule).click()
        cy.wait(4000)     
    }
    newAppointment(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.newAppointment).click()
        cy.wait(4000)     
    }
    searchBar(memName){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.searchBar).type(memName)
        cy.wait(4000)     
    }
    // memberSelections(){
    //     cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.memberSelection).click()
    //     cy.wait(4000)     
    // }
    memberSelection(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.memberSelection).click()
        cy.wait(4000)     
    }
    continueTOnext(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.continueTOnext).click()
        cy.wait(4000)     
    }
    careTeam1(){
        cy.get(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.careTeam1).click()
        cy.wait(4000)     
    }
    careTeam2(){
        cy.get(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.careTeam2).click()
        cy.wait(4000)     
    }
    memberContinue(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.memberContinue).click()
        cy.wait(4000)     
    }

    sessionSelection1(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sessionSelection1).click()
        cy.wait(4000)     
    }
    sessionSelection2(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sessionSelection2).click()
        cy.wait(4000)     
    }
    sessionContinue(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sessionContinue).click()
        cy.wait(4000)     
    }
    startInstantSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.startInstantSession).click()
        cy.wait(4000)     
    }
    startInstantSession_button(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.startInstantSession_button).click()
        cy.wait(4000)     
    }
    cancelInstantSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.cancelInstantSession).click()
        cy.wait(4000)     
    }
    specificDateSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.specificDateSession).click()
        cy.wait(4000)     
    }
    dateSelection(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.dateSelection).click()
        cy.wait(4000)     
    }
    timeSlotSelection(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.timeSlotSelection).click()
        cy.wait(4000)     
    }
    timeSlotContinue_button(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.timeSlotContinue_button).click()
        cy.wait(4000)     
    }
    timeSlotAppointmentCancel(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.timeSlotAppointmentCancel).click()
        cy.wait(4000)     
    }
    scheduleSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.scheduleSession).click()
        cy.wait(4000)     
    }
    scheduleSessionCancel(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.scheduleSessionCancel).click()
        cy.wait(4000)     
    }
    ScheduleLink(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.ScheduleLink).click()
        cy.wait(4000)     
    }
    

}