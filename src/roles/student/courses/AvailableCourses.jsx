import { useState, useEffect } from "react";
import { STUDENT_URL } from "../../../shared/API";
import axios from "axios";

// Reusable Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { CommonTable } from "../../../components/table/common/CommonTable";

// to delete
import { testingCourses } from "./testing";

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

  useEffect(() => {
    // TO DELETE
    if (testingCourses.length !== 0) {
      const levelsCourses = testingCourses.reduce((acc, current) => {
        const levelIndex = acc.findIndex(
          (level) => level.level === current.level
        );
        if (levelIndex === -1) {
          // Add a new level
          acc.push({
            level: current.level,
            courses: [
              {
                id: current.id,
                code: current.code,
                arabicName: current.arabicName,
                englishName: current.englishName,
              },
            ],
          });
        } else {
          // Add course to existing level
          acc[levelIndex].courses.push({
            id: current.id,
            code: current.code,
            arabicName: current.arabicName,
            englishName: current.englishName,
          });
        }
        return acc;
      }, []);
      setCourses(levelsCourses);
      console.log(levelsCourses);
    } else {
      setCourses([]);
    }
    //////////////////
    // setUserUX({ loading: true, error: false, errorMsg: "" });
    // // GET request to get student's available courses
    // axios
    //   .get(
    //     `${STUDENT_URL}/available_courses/698b2eed-b652-4246-bdbc-610da8b67cb5`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.length !== 0) {
    //       const levelsCourses = res.data.reduce((acc, current) => {
    //         const levelIndex = acc.findIndex(
    //           (level) => level.level === current.level
    //         );
    //         if (levelIndex === -1) {
    //           // add new level
    //           acc.push({
    //             level: current.level,
    //             courses: {
    //               id: current.id,
    //               code: current.code,
    //               arabicName: current.arabicName,
    //               englishName: current.englishName,
    //             },
    //           });
    //         } else {
    //           // add class to existing level
    //           acc[levelIndex].courses.push({
    //             id: current.id,
    //             code: current.code,
    //             arabicName: current.arabicName,
    //             englishName: current.englishName,
    //           });
    //         }
    //         return acc;
    //       }, []);
    //       setCourses(levelsCourses);
    //     } else {
    //       setCourses([]);
    //     }
    //     setUserUX({ loading: false, error: false, errorMsg: "" });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setUserUX({ loading: false, error: true, errorMsg: err.message });
    //   });
  }, []);

  return (
    <div className="container">
      <SidebarCont>
        {courses.map((item) => {
          return (
            <div className="cont" key={item.level}>
              <div className="mb-5">
                <CommonTable
                  header={`${item.level}`}
                  headings={TableHeadings}
                  data={item.courses}
                  userUX={userUX}
                />
              </div>
            </div>
          );
        })}
      </SidebarCont>
    </div>
  );
};
