import { faker } from '@faker-js/faker';

export const generateProviderData = () => {
  return {
    name: faker.name.fullName(),
    Provider_Code: faker.datatype.number({ min: 100000, max: 999999 }).toString(),
    Email: faker.internet.email(),
    Password: faker.internet.password(8),
    Phone: faker.phone.number('##########'), 
    Approach: faker.lorem.sentences(6),
    About: faker.lorem.sentences(5)
  };
};

export const generateMemberData = () => {
  return {
    fName: faker.name.firstName(),
    lName: faker.name.lastName(),
    membersEmail: faker.internet.email(),
    number: faker.phone.number('##########'), 
    dob: faker.date.past(30, new Date()).toISOString().split('T')[0], 
    address1: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    referralSource: faker.company.bsAdjective(), 
    primaryInterests: faker.lorem.words(3)      
  };
};