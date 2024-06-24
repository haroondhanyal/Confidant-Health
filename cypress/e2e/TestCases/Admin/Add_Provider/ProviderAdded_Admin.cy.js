import { Add_Provider_By_Admin } from "../../../Pages/Admin/AddProvider/Add_Provider";
const Provider_Added_Admin = new Add_Provider_By_Admin();
import {CurrentAppointmentAssignEvaluations} from "../../../Pages/Admin/Appointments/Current_Appointments"
import { loginAsAdmin } from "../../../utils/Login";


const openCurrent_Appointment = new CurrentAppointmentAssignEvaluations ();


describe("Provider Added By Admin ",()=>{
    beforeEach(() => {
        const baseUrl = Cypress.env('baseUrl');
        cy.visit(baseUrl);
        openCurrent_Appointment.AdminSelection();
        cy.wait(3000)
       loginAsAdmin('admin1'); 
    });
    it("TC01:Add a new Provider",()=>{
        cy.fixture('AddProvider').then((data)=>{
            Provider_Added_Admin.selectProvider()
            Provider_Added_Admin.AddProvider()
            Provider_Added_Admin.EnterName(data.name)
            Provider_Added_Admin.ProviderCode(data.Provider_Code)
            Provider_Added_Admin.Gender()
            Provider_Added_Admin.EmailProvider(data.Email)
            Provider_Added_Admin.ProviderPassword(data.Password)
            Provider_Added_Admin.CountrySelection()
            Provider_Added_Admin.Phone_Selection()
            Provider_Added_Admin.Enter_PhoneNumber(data.Phone)
            Provider_Added_Admin.SignOffRole()
            Provider_Added_Admin.SignOffRole1()
            Provider_Added_Admin.DesignationSelection()
            Provider_Added_Admin.Designation2()
            Provider_Added_Admin.State_Selection()
            Provider_Added_Admin.Specialities_Selection()
            Provider_Added_Admin.EnterApproaches(data.Approach)
            Provider_Added_Admin.About(data.About)
            Provider_Added_Admin.ProfilePicUpload()
            Provider_Added_Admin.ProviderAdded()

        })
    })

})

