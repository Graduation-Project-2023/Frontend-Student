import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { STUDENT_URL } from "../../../shared/API";
import axios from "axios";
import { TableHeadings, StudentTableHeadings } from "./ProgressData";
import { testingStudent } from "../../../shared/Testing";

// Reusable Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { CommonTable } from "../../../components/table/common/CommonTable";
import { VerticalTable } from "../../../components/table/vertical/VerticalTable";
import { Backdrop } from "../../../components/loaders/Backdrop";

export const Progress = () => {
  const [courses, setCourses] = useState([]);
  const [userUX, setUserUX] = useState({
    loading: true,
    error: false,
    errorMsg: "",
  });
  const { t } = useTranslation();
  const authContext = useAuth();

  useEffect(() => {
    setUserUX({ loading: true, error: false, errorMsg: "" });
    // GET request to get student's progress
    axios
      .get(`${STUDENT_URL}/progress?studentId=${authContext.id}`)
      .then((res) => {
        console.log(res);
        const coursesData = res.data.courses;
        if (coursesData.length !== 0) {
          const levelsCourses = coursesData.reduce((acc, current) => {
            const levelIndex = acc.findIndex(
              (level) => level.level === current.level
            );
            if (levelIndex === -1) {
              // add new level
              acc.push({
                level: current.level,
                courses: [
                  {
                    id: current.id,
                    code: current.code,
                    arabicName: current.arabicName,
                    englishName: current.englishName,
                    courseType: current.courseType,
                    hours: current.hours,
                    preReq: current.preReq,
                    finished: current.finished,
                    unlocked: current.unlocked,
                  },
                ],
              });
            } else {
              // add class to existing level
              acc[levelIndex].courses.push({
                id: current.id,
                code: current.code,
                arabicName: current.arabicName,
                englishName: current.englishName,
                courseType: current.courseType,
                hours: current.hours,
                preReq: current.preReq,
                finished: current.finished,
                unlocked: current.unlocked,
              });
            }
            return acc;
          }, []);
          setCourses(levelsCourses);
        } else {
          setCourses([]);
        }
        setUserUX({ loading: false, error: false, errorMsg: "" });
      })
      .catch((err) => {
        console.log(err);
        setUserUX({ loading: false, error: true, errorMsg: err.message });
      });
    // eslint-disable-next-line
  }, []);

  return userUX.loading ? (
    <Backdrop />
  ) : (
    <SidebarCont>
      <div className="cont">
        <div className="mb-5">
          <VerticalTable
            headings={StudentTableHeadings}
            data={testingStudent}
          />
        </div>

        {courses.map((item) => {
          return (
            <div key={item.level} className="mb-5">
              <CommonTable
                header={`${t("common.level").toUpperCase()} "${item.level}"`}
                headings={TableHeadings}
                data={item.courses}
                userUX={userUX}
              />
            </div>
          );
        })}
      </div>
    </SidebarCont>
  );
};
