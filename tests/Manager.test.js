const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const manager = new Manager("Aaron", 1, "aaron@gmail.com", "1234567890");

      expect(manager.name).toEqual("Aaron");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("aaron@gmail.com");
      expect(manager.officeNumber).toEqual("1234567890");
    });
  });
  describe("Functions", () => {
    it("should provide info when the appropriate function is called", () => {
      const manager = new Manager("Aaron", 1, "aaron@gmail.com", "1234567890");

      expect(manager.getName()).toEqual("Aaron");
      expect(manager.getId()).toEqual(1);
      expect(manager.getEmail()).toEqual("aaron@gmail.com");
      expect(manager.getRole()).toEqual("Manager");
      expect(manager.getPhone()).toEqual("1234567890");
    });
  });
});
