import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { STUDENT_URL } from "../../../shared/API";

// Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { Backdrop } from "../../../components/loaders/Backdrop";
import { CommonTable } from "../../../components/table/common/CommonTable";
import { GradesTableHeadings, GPAData } from "./GradesTableHeadings";

export const Grades = () => {
  const [courses, setCourses] = useState([]);
  const [userUX, setUserUX] = useState({
    loading: true,
    error: false,
    errorMsg: "",
  });
  const authContext = useAuth();
  const { t } = useTranslation();

  const calculateGPA = (item) => {
    const totalGrade =
      +item.classworkScore ||
      0 + +item.finalScore ||
      0 + +item.idtermScore ||
      0;
    let gpaRange = null;
    for (let i = 0; i < GPAData.length; i++) {
      const range = GPAData[i];
      if (totalGrade === 100) {
        gpaRange = GPAData[0];
        break;
      } else if (
        range.gpaFrom <= (4 * totalGrade) / 100 &&
        range.gpaTo > (4 * totalGrade) / 100
      ) {
        gpaRange = range;
        break;
      }
    }
    return {
      grade: gpaRange.grade,
      gpa: (4 * totalGrade) / 100,
    };
  };

  useEffect(() => {
    setUserUX({ loading: true, error: false, errorMsg: "" });
    axios
      .get(STUDENT_URL + `/courses?studentId=${authContext.id}`)
      .then((res) => {
        console.log(res);
        setCourses(
          res.data.map((item) => ({
            ...item.instance,
            ...item,
            total: +item.midtermScore + +item.classworkScore + +item.finalScore,
            grade: calculateGPA(item).grade,
            gpa: calculateGPA(item).gpa,
          }))
        );
        setUserUX({
          loading: false,
          error: res.data.length === 0 ? true : false,
          errorMsg: res.data.length === 0 ? "error.noGrades" : "",
        });
      })
      .catch((err) => {
        console.log(err);
        setUserUX({ loading: false, error: true, errorMsg: "error.common" });
      });
    // eslint-disable-next-line
  }, []);

  return userUX.loading ? (
    <Backdrop />
  ) : (
    <SidebarCont>
      <div className="mb-5">
        <CommonTable
          header={t("receipts.semester")}
          headings={GradesTableHeadings}
          data={courses}
          userUX={userUX}
        />
      </div>
    </SidebarCont>
  );
};
