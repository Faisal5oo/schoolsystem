const { createUser } = require("./staff/createNewUser");
const { deleteUser } = require("./staff/deleteStudent");
const { getAllUser } = require("./staff/getallUsers");
const { updateUser } = require("./staff/updateStudent");
const { getStudentInfo } = require("./student/getStudentInfo");
const { getInfo } = require("./teacher/getInfo");
const { updateTeacher } = require("./teacher/updateTeachers");

const url = "http://localhost:3000";
const select = "students";
const user = {
  name: "Emily Davis",
  age: 23,
  major: "English Literature, English University",
  email: "EmilyDavis@example.com",
};

// getAllUser("http://localhost:3000/", select);
// createUser(url, select, user);
// deleteUser(url, select, 11);
// updateUser(url, select, 4, user);
// getAllUser(url, select, 1);
// updateTeacher(35, user);
// getInfo(34);
getStudentInfo(20);
