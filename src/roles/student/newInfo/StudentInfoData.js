export const StudentInfoDataTEST = [
  {
    id: 1,
    title: "info.personal",
    header: true,
    headerData: [
      { id: 1, title: "common.name", name: "name" },
      { id: 2, title: "common.level", name: "level" },
      { id: 3, title: "common.department", name: "department" },
      { id: 4, title: "common.program", name: "program" },
    ],
    data: [
      { id: 1, title: "common.ar_name", name: "arabicName", row: true },
      { id: 2, title: "common.eng_name", name: "englishName", row: true },
      {
        id: 3,
        splitRow: [
          { id: 1, title: "common.nationality", name: "nationality" },
          { id: 2, title: "common.nationality", name: "otherNationality" },
        ],
      },
      {
        id: 4,
        splitRow: [
          { id: 1, title: "common.gender", name: "gender", enum: true },
          { id: 2, title: "common.religion", name: "religion", enum: true },
        ],
      },
      {
        id: 5,
        splitRow: [
          { id: 1, title: "common.birthdate", name: "birthDate", date: true },
          { id: 2, title: "common.birthplace", name: "birthPlace" },
        ],
      },
      {
        id: 6,
        splitRow: [
          { id: 1, title: "common.nationalId", name: "nationalId" },
          { id: 2, title: "common.marital", name: "maritalStatus", enum: true },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "info.family",
    data: [
      {
        id: 1,
        splitRow: [
          { id: 1, title: "common.guardianName", name: "guardianName" },
          { id: 2, title: "common.nationality", name: "guardianNationality" },
        ],
      },
      {
        id: 2,
        splitRow: [
          { id: 1, title: "common.guardianAddress", name: "guardianAddress" },
          { id: 2, title: "common.guardianPhone", name: "guardianPhone" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "info.contact",
    data: [
      { id: 1, title: "common.address", name: "address", type: "textarea" },
      {
        id: 2,
        splitRow: [
          { id: 1, title: "common.homeNumber", name: "homePhone" },
          { id: 2, title: "common.phone", name: "contactPhone" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "info.pre",
    data: [
      {
        id: 1,
        splitRow: [
          {
            id: 1,
            title: "common.prevQualificationInstitute",
            name: "institutePreviousQualification",
          },
          {
            id: 2,
            title: "common.prevQualification",
            name: "previousQualification",
          },
        ],
      },
      {
        id: 2,
        splitRow: [
          {
            id: 1,
            title: "common.enrollmentYear",
            name: "enrollmentYear",
            date: true,
          },
          {
            id: 2,
            title: "common.enrollmentEndDate",
            name: "enrollmentEndDate",
            date: true,
          },
        ],
      },
      {
        id: 3,
        splitRow: [
          {
            id: 1,
            title: "common.totalPrevQualification",
            name: "totalPreviousQualification",
          },
          { id: 2, title: "common.schoolSeat", name: "schoolSeatId" },
        ],
      },
    ],
  },
];
