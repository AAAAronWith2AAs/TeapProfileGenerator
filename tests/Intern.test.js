const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const intern = new Intern("Aaron", 1, "aaron@gmail.com", "DU");

      expect(intern.name).toEqual("Aaron");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("aaron@gmail.com");
      expect(intern.school).toEqual("DU");
    });
  });
  describe("Functions", () => {
    it("should provide info when the appropriate function is called", () => {
      const intern = new Intern("Aaron", 1, "aaron@gmail.com", "DU");

      expect(intern.getName()).toEqual("Aaron");
      expect(intern.getId()).toEqual(1);
      expect(intern.getEmail()).toEqual("aaron@gmail.com");
      expect(intern.getRole()).toEqual("Intern");
      expect(intern.getSchool()).toEqual("DU");
    });
  });
});
