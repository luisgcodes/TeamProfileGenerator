// Employee constructor 
const Employee = require('../lib/Employee');
 
test('generates an employee object', () => {
    const emp = new Employee('Luis', 28, 'lcienfuegos95@gmail.com');
    expect(emp.name).toEqual(expect.any(String));
    expect(emp.id).toEqual(expect.any(Number));
    expect(emp.email).toEqual(expect.any(String));
});
// retrieves name 
test('retrieves employee name', () => {
    const emp = new Employee('Luis', 28, 'lcienfuegos95@gmail.com');
    expect(emp.getName()).toEqual(expect.any(String));
});
// retrieves id 
test('retrieves employee ID', () => {
    const emp = new Employee('Luis', 28, 'lcienfuegos95@gmail.com');
    expect(emp.getId()).toEqual(expect.any(Number));
});
// retrieves email
test('retrieves employee email', () => {
    const emp = new Employee('Luis', 28, 'lcienfuegos95@gmail.com');
    expect(emp.getEmail()).toEqual(expect.stringContaining(emp.email.toString()));
});
// retrieves role
test('gets role of employee', () => {
    const emp = new Employee('Luis', 28, 'lcienfuegos95@gmail.com');
    expect(emp.getRole()).toEqual("Employee");
}); 