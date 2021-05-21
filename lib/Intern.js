const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "interns";
  }
}
