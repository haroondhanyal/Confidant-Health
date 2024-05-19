/// <reference types="Cypress"/>

import {AddMember} from "../../../Pages/Provider/Add_Member/AddMember"
import { loginAsProvider } from "../../../utils/Login";

const Add_newMember = new AddMember();

describe('Login As Provider ', () => {
    beforeEach(() => {
      loginAsProvider(); 
    });


    // it('Logs in with valid credentials', () => {
    //     loginAsProvider(); // this function is created in utils i am using it by reused here
    //   })


    it('Now login as Provider and Adds A new Member ',()=>{
        // loginAsProvider(); 
        cy.fixture('AddMember_provider').then((data) => {
            Add_newMember.dashboard_member();
            Add_newMember.addMember_button();
            Add_newMember.memberFirstName(data.fName);
            Add_newMember.memberLastName(data.lName);
            Add_newMember.selectGender3();
            Add_newMember.membersEmail(data.membersEmail);
            Add_newMember.sendInviteCheckBox();
            // Add_newMember.phoneNumberDropdown();
            // Add_newMember.countrySelection();
            Add_newMember.enterNumber(data.number);
            Add_newMember.memberDOB(data.dob);
            Add_newMember.Address1(data.address1);
            Add_newMember.Address2(data.address2);
            Add_newMember.enterCity(data.city);
            Add_newMember.selectStateDropdown();
            Add_newMember.stateName(data.state);
            Add_newMember.enterZipCode(data.zipCode);
            Add_newMember.addMemberButton();
            
            cy.wait(4000);
          });
    })

   
  });
  