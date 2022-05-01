// Engineer Constructor
const Engineer = require("../lib/Engineer");
// sets github
test("Sets GitHub", () => {
  const testValue = "GitHub";
  const emp = new Engineer('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.github).toBe(testValue);
});
// returns enginner
test("returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const emp = new Engineer('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.getRole()).toBe(testValue);
});
// retrieves github
test("retrieves github", () => {
  const testValue = "GitHub";
  const emp = new Engineer('Luis', 28, 'lcienfuegos95@gmail.com', testValue);
  expect(emp.getGithub()).toBe(testValue);
});  