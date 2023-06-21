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

export const CoursesTableHeadings = [
  {
    id: 0,
    label: "courses.name",
    name: "name",
  },
  {
    id: 1,
    label: "common.day",
    name: "day",
  },
  {
    id: 2,
    label: "common.startPeriod",
    name: "startPeriod",
  },
  {
    id: 3,
    label: "common.endPeriod",
    name: "endPeriod",
  },
  { id: 4, label: "common.lecturer", name: "lecturer" },
  { id: 5, label: "common.place", name: "place" },
];
