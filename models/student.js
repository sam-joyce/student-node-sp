export default class Student {
  constructor(id, name, age, interests) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.interests = interests;
    this.dateCreated = new Date().toUTCString();
  }

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