// Intern Constructor
const Intern = require("../lib/Intern");

// Retrieves School
test("Retrieves School", () => {
  const testValue = "School";
  const emp = new Intern('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.school).toBe(testValue);
});
// Retruns Intern
test("Returns \"Intern\"", () => {
  const testValue = "Intern";
  const emp = new Intern('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.getRole()).toBe(testValue);
});
// Retrieves School
test("Retrieves school", () => {
  const testValue = "School";
  const emp = new Intern('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.getSchool()).toBe(testValue);
});