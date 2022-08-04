class Student {
  constructor(name, standard, age, gender, location) {
    this.name = name;
    this.standard = standard;
    this.age = age;
    this.gender = gender;
    this.location = location;
  }
  displayDetails() {
    console.log(`
        Name: ${this.name}
        standard: ${this.standard}
        age: ${this.age}
        gender: ${this.gender}
        location: ${this.location}`);
  }

  findIfNotEmpty(input) {
    if (input.trim().length != 0) return true;
  }

  formatString(input) {
    input = input.trim();
    input = input
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return input;
  }
  setName(name) {
    if (this.findIfNotEmpty(name)) this.name = this.formatString(name);
    else alert("Empty string at Name field");
  }
  deleteName() {
    delete this.name;
  }

  setStandard(standard) {
    if (this.findIfNotEmpty(standard))
      this.standard = this.formatString(standard);
    else alert("Empty string at Class field");
  }
  deleteStandard() {
    delete this.standard;
  }

  setAge(age) {
    if (this.findIfNotEmpty(age)) this.age = this.formatString(age);
    else alert("Empty string at Age field");
  }
  deleteAge() {
    delete this.age;
  }

  setGender(gender) {
    if (this.findIfNotEmpty(gender)) this.gender = this.formatString(gender);
    else alert("Empty string at Gender field");
  }
  deleteGender() {
    delete this.gender;
  }

  setLocation(location) {
    if (this.findIfNotEmpty(location))
      this.location = this.formatString(location);
    else alert("Empty string at Location field");
  }
  deleteLocation() {
    delete this.location;
  }
}

students = [];

function addToStudentList() {
  personName = document.getElementById("name").value;
  std = document.getElementById("std").value;
  age = document.getElementById("age").value;
  gender = document.getElementById("gender").value;
  place = document.getElementById("place").value;
  student = new Student();
  student.setName(personName);
  student.setStandard(std);
  student.setAge(age);
  student.setGender(gender);
  student.setLocation(place);
  console.log("hi");
  if (
    student.name != null &&
    student.standard != null &&
    student.age != null &&
    student.gender != null &&
    student.location != null
  ) {
    students.push(student);
  }
  displaystudentData();
  clearfields();
}

function displaystudentData() {
  console.log(students);
  cards = "";
  students.forEach(
    (student, id) =>
      (cards += `<div class="flex-container">
                <div class="col card space-between">
                    <div class="img-placeholder">
                        <img
                            src="placeholder.webp">
                    </div>
                    <div>
                        <h2>${student.name}</h2>
                        <h3>${student.standard}<h3>
                        <p><i class="fa-solid fa-user"></i> ${student.gender}</p>
                        <p><i class="fa-solid fa-child"></i> ${student.age} years old</p>
                        <p><i class="fa-solid fa-location-dot"></i> ${student.location}</p>
                    </div>
                    <div>
                        <i class="fa fa-2x action fa-edit"  onclick=loadStudentDataToInputs(${id})></i>
                        <i class="fa fa-2x action fa-trash" onclick=deletestudentData(${id})></i>
                    </div>
                </div>
            </div>`)
  );
  document.getElementById("display").innerHTML = cards;
}

function deletestudentData(id) {
  delete students[id];
  displaystudentData();
}

function loadStudentDataToInputs(id) {
  document.getElementById("name").value = students[id].name;
  document.getElementById("std").value = students[id].standard;
  document.getElementById("age").value = students[id].age;
  document.getElementById("gender").value = students[id].gender;
  document.getElementById("place").value = students[id].location;
  document.getElementById(
    "buttontoadd"
  ).innerHTML = `<button onclick=editStudentData(${id})>Commit Changes</button></div>`;
  document.getElementById("title").value = "Edit Student Details";
}

function editStudentData(id) {
  personName = document.getElementById("name").value;
  std = document.getElementById("std").value;
  age = document.getElementById("age").value;
  gender = document.getElementById("gender").value;
  place = document.getElementById("place").value;
  students[id].setName(personName);
  students[id].setStandard(std);
  students[id].setAge(age);
  students[id].setGender(gender);
  students[id].setLocation(place);
  displaystudentData();
  document.getElementById(
    "buttontoadd"
  ).innerHTML = `<button onclick=addToStudentList()>Add</button></div>`;
  clearfields();
  document.getElementById("title").innerHTML = "Add Student";
  clearfields();
}

function clearfields() {
  document.getElementById("name").value = "";
  document.getElementById("std").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("place").value = "";
}
