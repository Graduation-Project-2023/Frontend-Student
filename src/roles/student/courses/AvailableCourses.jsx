import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { STUDENT_URL } from "../../../shared/API";
import axios from "axios";

// Reusable Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { CommonTable } from "../../../components/table/common/CommonTable";
import { Backdrop } from "../../../components/loaders/Backdrop";

const TableHeadings = [
  { id: 0, label: "courses.code", name: "code" },
  { id: 1, label: "courses.ar_name", name: "arabicName" },
  { id: 2, label: "courses.en_name", name: "englishName" },
];

export const AvailableCourses = () => {
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
    // GET request to get student's available courses
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
      {courses.map((item) => {
        return (
          <div className="mb-5" key={item.level}>
            <CommonTable
              header={`${t("common.level").toUpperCase()} "${item.level}"`}
              headings={TableHeadings}
              data={item.courses}
              userUX={userUX}
            />
          </div>
        );
      })}
    </SidebarCont>
  );
};
