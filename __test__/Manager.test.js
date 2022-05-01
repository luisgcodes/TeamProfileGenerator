// Manager Constructor
const Manager = require("../lib/Manager");
// sets officeNumber
test("Sets officeNumber", () => {
  const testValue = 100;
  const emp = new Manager('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.officeNumber).toBe(testValue);
});
// Returns Manager 
test("Returns \"Manager\"", () => {
  const testValue = "Manager";
  const emp = new Manager('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.getRole()).toBe(testValue);
});
// Retrieves Office Number
test("retrieves officeNumber", () => {
  const testValue = 100;
  const emp = new Manager('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.getOfficeNumber()).toBe(testValue);
});