export const TableHeadings = [
  {
    id: 0,
    label: "courses.name",
    name: "name",
  },
  { id: 1, label: "courses.code", name: "code" },
  { id: 2, label: "courses.hours", name: "hours" },
  { id: 3, label: "courses.type", name: "type" },
  { id: 4, label: "courses.pre", name: "hours" },
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

export const testingCourses = [
  {
    id: "6ba865ee-6b20-41a8-ad31-4348263da4b3",
    code: "CCE3",
    englishName: "arabic",
    arabicName: "arabic but in arabic",
    finished: false,
    unlocked: true,
    level: 0,
    programCourseId: "a7acf042-2ec7-446d-9a0d-510e3f8f2d98",
  },
  {
    id: "20df8986-5f6f-4280-9f53-47425e496ba6",
    code: "CCZ24",
    englishName: "english",
    arabicName: "english but in arabic",
    finished: false,
    unlocked: true,
    level: 0,
    programCourseId: "e021c8c0-8bfc-49ab-9fc9-3c3ee60a40d0",
  },
  {
    id: "6f5fd4a3-471d-472c-904a-38174da7464a",
    code: "CZF42",
    englishName: "Maths",
    arabicName: "maths but in arabic",
    finished: false,
    unlocked: true,
    level: 1,
    programCourseId: "c2951774-34d1-4c9d-80c5-08d788d3280a",
  },
  {
    id: "e3eb0162-80f7-443e-96ea-569f9adfde58",
    code: "cszd2",
    englishName: "physics",
    arabicName: "physics but in arabic",
    finished: false,
    unlocked: true,
    level: 2,
    programCourseId: "193cab8d-2a93-478f-a4c5-621727ce7f1d",
  },
  {
    id: "51a5b028-e94e-4a2b-a0c4-710753bd2513",
    code: "sfgs3",
    englishName: "chemistry",
    arabicName: "chemistry but in arabic",
    finished: false,
    unlocked: true,
    level: 3,
    programCourseId: "46c154c7-7b87-4372-a14b-cb8dfef2d6f5",
  },
  {
    id: "1874a499-6e61-411b-962f-cdcfde608b38",
    code: "sadsa1",
    englishName: "biology",
    arabicName: "biology but in arabic",
    finished: false,
    unlocked: true,
    level: 3,
    programCourseId: "d69effe1-a8d2-46be-9239-a9581b87be56",
  },
  {
    id: "24e371d3-b4f1-4f45-aa8a-e31088539635",
    code: "sadsa2",
    englishName: "geograpeee eeeeeeeee eeee eeeeeeeeeehy",
    arabicName: "geography but in arabic",
    finished: false,
    unlocked: true,
    level: 4,
    programCourseId: "b535dd44-b11b-4fee-af2c-a14b750b78db",
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
