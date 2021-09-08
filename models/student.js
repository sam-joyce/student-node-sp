const db = require('../config/firebase.js');

class Student {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.age = data.age;
    this.interests = data.interests;
    this.dateCreated = new Date().toUTCString();
  }

  static async findAll() {
      const res = await db.collection('students').get();
      return res.docs.map(doc => doc.data());
  }

  static async find(id) {
    const res = await db.collection("students").doc(id).get();
    return res.data();
  }

  async save() {
    this.dateModified = new Date().toUTCString();
    const student = {...this};
    const res = await db.collection("students").doc().set(student);
  }

  static async destroy(id) {
    await db.collection("students").doc(id).delete();
    return id + " has been deleted."
  }
}

module.exports = Student;