export const StudentTableHeadings = [
  {
    id: 0,
    cols: [
      {
        id: 0,
        label: "student.name",
        name: "name",
      },
      { id: 1, label: "student.gpa", name: "gpa" },
    ],
  },
  {
    id: 1,
    cols: [
      { id: 0, label: "student.department", name: "department" },
      { id: 1, label: "student.registered_hrs", name: "registered_hrs" },
    ],
  },
  {
    id: 2,
    cols: [
      { id: 0, label: "student.id", name: "student_id" },
      { id: 1, label: "student.allowed_hrs", name: "allowed_hrs" },
    ],
  },
  {
    id: 3,
    cols: [
      { id: 0, label: "student.advisor", name: "advisor" },
      { id: 1, label: "student.allowed_courses", name: "allowed_courses" },
    ],
  },
];

export const testingStudent = {
  name: "Ahmed",
  gpa: 3.5,
  department: "CS",
  registered_hrs: 12,
  student_id: 123456,
  allowed_hrs: 18,
  advisor: "Dr. Ahmed",
  allowed_courses: 3,
};
