const { it } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Aaron", 1, "aaron@gmail.com");

      expect(employee.name).toEqual("Aaron");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("aaron@gmail.com");
    });
  });
  describe("Functions", () => {
    it("should provide info when the appropriate function is called", () => {
      const employee = new Employee("Aaron", 1, "aaron@gmail.com");

      expect(employee.getName()).toEqual("Aaron");
      expect(employee.getId()).toEqual(1);
      expect(employee.getEmail()).toEqual("aaron@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
