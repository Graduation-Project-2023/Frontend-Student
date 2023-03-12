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
      { id: 1, label: "student.mandatory_hrs", name: "mandatory_hrs" },
    ],
  },
  {
    id: 2,
    cols: [
      { id: 0, label: "student.id", name: "student_id" },
      { id: 1, label: "student.elective_hrs", name: "elective_hrs" },
    ],
  },
  {
    id: 3,
    cols: [
      { id: 0, label: "student.project_hrs", name: "project_hrs" },
      { id: 1, label: "student.passed_hrs", name: "passed_hrs" },
    ],
  },
];

export const testingStudent = {
  id: "6ba865ee-6b20-41a8-ad31-4348263da4b3",
  name: "Mohamed",
  student_id: "201700000",
  department: "Computer Science",
  reqHours: 120,
  mandatory_hrs: 60,
  elective_hrs: 30,
  project_hrs: 30,
  passed_hrs: 0,
};
