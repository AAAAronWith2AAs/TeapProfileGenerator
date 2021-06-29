const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const engineer = new Engineer("Aaron", 1, "aaron@gmail.com", "gitHub.io");

      expect(engineer.name).toEqual("Aaron");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("aaron@gmail.com");
      expect(engineer.gitHub).toEqual("gitHub.io");
    });
  });
  describe("Functions", () => {
    it("should provide info when the appropriate function is called", () => {
      const engineer = new Engineer("Aaron", 1, "aaron@gmail.com", "gitHub.io");

      expect(engineer.getName()).toEqual("Aaron");
      expect(engineer.getId()).toEqual(1);
      expect(engineer.getEmail()).toEqual("aaron@gmail.com");
      expect(engineer.getRole()).toEqual("Engineer");
      expect(engineer.getGitHub()).toEqual("gitHub.io");
    });
  });
});
