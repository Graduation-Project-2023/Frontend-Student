export const TableHeadings = [
  {
    id: 0,
    label: "courses.name",
    name: "name",
  },
  { id: 1, label: "courses.code", name: "code" },
  { id: 2, label: "courses.hours", name: "hours" },
  { id: 3, label: "courses.type", name: "courseType" },
  { id: 4, label: "courses.pre", name: "preReq" },
  { id: 5, label: "courses.passed", name: "finished" },
  { id: 6, label: "courses.registeration", name: "unlocked" },
];

export const StudentTableHeadings = [
  {
    id: 0,
    cols: [
      {
        id: 0,
        label: "student.name",
        name: "name",
      },
      { id: 1, label: "student.req_hrs", name: "reqHours" },
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

