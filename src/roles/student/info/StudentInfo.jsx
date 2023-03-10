import React from "react";
import { useEffect, useState } from "react";
import { STUDENT_URL } from "../../../shared/API";
import { useParams } from "react-router-dom";
import { SidebarCont } from "../../../components/header/SidebarCont";
import { useTranslation } from "react-i18next";
import axios from "axios";

export const StudentInfo = () => {
  const { t } = useTranslation();
  const { studentId } = useParams();
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const [studentData, setStudentData] = useState({});
  const info = [
    {
      id: 1,
      title: "info.personal",
      data: [
        { id: 1, title: "common.eng_name" },
        { id: 2, title: "common.ar_name" },
        { id: 3, title: "common.nationality" },
        { id: 4, title: "common.gender" },
        { id: 5, title: "common.religion" },
        { id: 6, title: "common.birthdate" },
        { id: 7, title: "common.birthplace" },
        { id: 8, title: "common.nationalId" },
      ],
    },
    {
      id: 2,
      title: "info.family",
      data: [
        { id: 1, title: "common.guardianName" },
        { id: 2, title: "common.guardianJob" },
        { id: 3, title: "common.city" },
        { id: 4, title: "common.gender" },
        { id: 5, title: "common.guardianAddress" },
        { id: 6, title: "common.guardianMail" },
        { id: 7, title: "common.guardianPhone" },
      ],
    },
    {
      id: 3,
      title: "info.contact",
      data: [
        { id: 1, title: "common.city" },
        { id: 2, title: "common.address" },
        { id: 3, title: "common.homeNumber" },
        { id: 4, title: "common.mail" },
        { id: 5, title: "common.box" },
        { id: 6, title: "common.phone" },
        { id: 7, title: "common.system" },
      ],
    },
    {
      id: 4,
      title: "info.pre",
      data: [
        { id: 1, title: "common.prevQualificationInstitute" },
        { id: 2, title: "common.prevQualification" },
        { id: 3, title: "common.enrollmentYear" },
        { id: 4, title: "common.enrollmentEndDate" },
        { id: 5, title: "common.totalPrevQualification" },
        { id: 6, title: "common.schoolSeat" },
        { id: 7, title: "common.precentage" },
      ],
    },
  ];
  // GET request to get student data by it's id
  useEffect(() => {
    setUserUX((prev) => ({
      ...prev,
      loading: true,
    }));
    axios
      .get(STUDENT_URL + "/info")
      .then((res) => {
        console.log(res.data);
        setStudentData(res.data);
        setUserUX((prev) => ({
          ...prev,
          loading: false,
        }));
      })
      .catch((error) => {
        console.log(error);
        setUserUX((prev) => ({
          ...prev,
          errorMsg: "student data error",
        }));
      });
  }, [studentId]);

  return (
    <SidebarCont>
      {info.map((item) => {
        return (
          <div key={item.id} className="info">
            <h1 className="info-title">{`${t(item.title)}`}</h1>
            <div className="infoCard">
              {item.data.map((items) => {
                return (
                  <div className="infoCard-item" key={items.id}>
                    <span className="infoCard-item-title">
                      {" "}
                      {`${t(items.title)}`}
                    </span>
                    {userUX.error ? (
                      userUX.errorMsg
                    ) : userUX.loading ? (
                      <span>loading....</span>
                    ) : (
                      <></>
                      // <span>{studentData}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </SidebarCont>
  );
};
