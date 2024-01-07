// Simple Example of testing the expected outcome with the actual outcome

const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFullName = getFullName('Shivam', 'Taneja');
const expectedFullname = 'ShivamTaneja';

if(actualFullName !== expectedFullname) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullname}`);
};