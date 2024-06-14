const ScheduleAppointmentSessions = require ("../../../Locators/Appointments/Provider_Appointment.json")

export class ScheduleSession {
    customWait() {
        cy.wait(2000);  // i am using custom wait and using where we need
    }
    sidebar_Schedule(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sidebar_Schedule).click()
        this.customWait();       
    }
    newAppointment(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.newAppointment).click()
        this.customWait();        
    }
    searchBar(memName){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.searchBar).type(memName)
        this.customWait();         
    }
    // memberSelections(){
    //     cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.memberSelection).click()
    //     this.customWait();         
    // }
    memberSelection(){
        cy.get(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.memberSelection).click()
        this.customWait();         
    }
    continueTOnext(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.continueTOnext).click()
        this.customWait();         
    }
    careTeam1(){
        cy.get(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.careTeam1).click()
        this.customWait();         
    }
    careTeam2(){
        cy.get(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.careTeam2).click()
        this.customWait();         
    }
    memberContinue(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.memberContinue).click()
        this.customWait();         
    }

    sessionSelection1(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sessionSelection1).click()
        this.customWait();         
    }
    sessionSelection2(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sessionSelection2).click()
        this.customWait();         
    }
    sessionContinue(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.sessionContinue).click()
        this.customWait();        
    }
    startInstantSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.startInstantSession).click()
        this.customWait();        
    }
    startInstantSession_button(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.startInstantSession_button).click()
        this.customWait();         
    }
    cancelInstantSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.cancelInstantSession).click()
        this.customWait();         
    }
    specificDateSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.specificDateSession).click()
        this.customWait();         
    }
    dateSelection(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.dateSelection).click()
        this.customWait();         
    }
    timeSlotSelection(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.timeSlotSelection).click()
        this.customWait();         
    }
    timeSlotContinue_button(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.timeSlotContinue_button).click()
        this.customWait();        
    }
    timeSlotAppointmentCancel(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.timeSlotAppointmentCancel).click()
        this.customWait();       
    }
    scheduleSession(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.scheduleSession).click()
        this.customWait();         
    }
    scheduleSessionCancel(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.scheduleSessionCancel).click()
        this.customWait();      
    }
    ScheduleLink(){
        cy.xpath(ScheduleAppointmentSessions.ProviderAppointmentScheduleLocators.ScheduleLink).click()
        this.customWait();         
    }
    

}