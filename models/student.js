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
      return db.collection('students').get().then((res) => {
        return res.docs.map(doc => doc.data());
      });
  }

  static async find(id) {
    const response = await db
        .collection("students")
        .where("id", "==", id)
        .get();
    return response.docs.map(doc => doc.data());
}

  // static async find(id) {
  //   // console.log(id);
  //   const stringId = `${id}`;
  //   return await db.collection('students').doc(id).get().then(res => res.data())
  // }

  async save() {
    // this.dateModified = new Date().toUTCString();
    const student = {...this}; 
    const res = await db.collection("students").doc().set(student);
  }

  static async destroy(id) {
    await db
      .collection("students")
      .where("id", "==", id)
      .get()
      .then(res => res.forEach(r => r.ref.delete()))

    return id + " has been deleted."
  }
}

module.exports = Student;