const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, email, id, officeNum) {
    super(name, email, id);
    this.officeNum = officeNum;
  }

  getGithub() {
    return this.officeNum;
  }

  getRole() {
    return "manager";
  }
}

module.exports = Manager;