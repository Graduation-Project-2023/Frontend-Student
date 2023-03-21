export const StudentInfoData = [
  {
    id: 1,
    title: "info.personal",
    data: [
      { id: 1, title: "common.eng_name", name: "englishName" },
      { id: 2, title: "common.ar_name", name: "arabicName" },
      { id: 3, title: "common.nationality", name: "nationality" },
      { id: 4, title: "common.gender", name: "gender", enum: true },
      { id: 5, title: "common.religion", name: "religion", enum: true },
      { id: 6, title: "common.birthdate", name: "birthDate", date: true },
      { id: 7, title: "common.birthplace", name: "birthPlace" },
      { id: 8, title: "common.nationalId", name: "nationalId" },
      { id: 9, title: "common.marital", name: "maritalStatus", enum: true },
    ],
  },
  {
    id: 2,
    title: "info.family",
    data: [
      { id: 1, title: "common.guardianName", name: "guardianName" },
      { id: 2, title: "common.nationality", name: "guardianNationality" },
      { id: 3, title: "common.guardianAddress", name: "guardianAddress" },
      { id: 4, title: "common.guardianPhone", name: "guardianPhone" },
    ],
  },
  {
    id: 3,
    title: "info.contact",
    data: [
      { id: 1, title: "common.address", name: "address" },
      { id: 2, title: "common.homeNumber", name: "homePhone" },
      { id: 3, title: "common.phone", name: "contactPhone" },
    ],
  },
  {
    id: 4,
    title: "info.pre",
    data: [
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
      {
        id: 3,
        title: "common.enrollmentYear",
        name: "enrollmentYear",
        date: true,
      },
      {
        id: 4,
        title: "common.enrollmentEndDate",
        name: "enrollmentEndDate",
        date: true,
      },
      {
        id: 5,
        title: "common.totalPrevQualification",
        name: "totalPreviousQualification",
      },
      { id: 6, title: "common.schoolSeat", name: "schoolSeatId" },
    ],
  },
];
