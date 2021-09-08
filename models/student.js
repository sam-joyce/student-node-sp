export default class Student {
  constructor() {}

  static findAll() {
      return "I'm all the students";
  }

  static find(id) {
      return "I'm a student with id: " + id;
  }

  save() {
      return "Created student";
  }

  static destroy(id) {
      return "Deleted a student with id: " + id;
  }
}