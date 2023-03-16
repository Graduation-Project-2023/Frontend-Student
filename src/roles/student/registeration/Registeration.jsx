import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { STUDENT_URL } from "../../../shared/API";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import i18next from "i18next";

// Reusable Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { VerticalTable } from "../../../components/table/vertical/VerticalTable";
import { DayPeriodTable } from "../../../components/table/schedule/DayPeriodTable";
import { LEVELS } from "../../../shared/Levels";
import {
  StudentTableHeadings,
  CoursesTableHeadings,
  testingStudent,
} from "./RegisterationData";

export const Registeration = () => {
  const [tableData, setTableData] = useState([]);
  const [tableRegistered, setTableRegistered] = useState({
    state: false,
    tableId: "",
  });
  const [availableClasses, setAvailableClasses] = useState([]);
  const [courseInstancesIds, setCourseInstancesIds] = useState([]);
  const [cells, setCells] = useState({ occupied: [], available: [] });
  const [userUX, setUserUX] = useState({
    tableSubmit: { loading: false, error: false, errorMsg: "" },
    tableData: { loading: false, error: false, errorMsg: "" },
    table: { error: false, errorMsg: "" },
    courses: { loading: false, error: false, errorMsg: "" },
  });
  const authContext = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    setUserUX((prev) => ({
      ...prev,
      tableData: { loading: true, error: false, errorMsg: "" },
    }));
    // GET request to get student schedule by student id
    axios
      .get(
        STUDENT_URL +
          `/table?studentId=${authContext.id}&semesterId=decc46ba-7d4b-11ed-a1eb-0242ac120002`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data === null) {
          setTableData([]);
          setTableRegistered({ state: false, tableId: "" });
        } else {
          setTableData(res.data.classes);
          setTableRegistered({ state: true, tableId: res.data.id });
        }
        setUserUX((prev) => ({
          ...prev,
          tableData: { loading: false, error: false, errorMsg: "" },
        }));
      })
      .catch((err) => {
        console.log(err);
        setUserUX((prev) => ({
          ...prev,
          tableData: {
            loading: false,
            error: true,
            errorMsg: "error in student table data",
          },
        }));
      });
  }, [authContext.id]);

  useEffect(() => {
    setUserUX((prev) => ({
      ...prev,
      courses: { loading: true, error: false, errorMsg: "" },
    }));
    // GET request to get available classes for student to add to schedule
    axios
      .get(
        STUDENT_URL +
          `/available_classes?studentId=${authContext.id}&semesterId=decc46ba-7d4b-11ed-a1eb-0242ac120002`
      )
      .then((res) => {
        console.log(res.data);
        setAvailableClasses(res.data);
        setUserUX((prev) => ({
          ...prev,
          courses: { loading: false, error: false, errorMsg: "" },
        }));
      })
      .catch((err) => {
        console.log(err);
        setUserUX((prev) => ({
          ...prev,
          courses: {
            loading: false,
            error: true,
            errorMsg: "error in classes",
          },
        }));
      });
  }, [authContext.id]);

  useEffect(() => {
    if (tableData.length === 0) {
      setCourseInstancesIds([]);
    } else if (tableData.length > 0) {
      const courseInstancesIds = tableData.map((item) => item.courseInstanceId);
      setCourseInstancesIds(courseInstancesIds);
    }
  }, [tableData]);

  const handleCellsSetter = (occupiedCells, availableCells) => {
    setCells((current) => {
      return {
        ...current,
        occupied: occupiedCells,
        available: availableCells,
      };
    });
  };

  const findCellAvailable = (classes) => {
    let cellOccupied = false;
    classes.forEach((item) => {
      const dayAvailableCells = cells.available.filter(
        (cell) => cell.day === item.day
      );
      let classHrs = +item.endPeriod - +item.startPeriod + 1;
      for (let i = 0; i < classHrs; i++) {
        const cellFound = dayAvailableCells.some(
          (cell) => cell.period === +item.startPeriod + i
        );
        if (!cellFound) {
          cellOccupied = true;
          break;
        }
      }
    });
    if (cellOccupied) {
      setUserUX((prev) => ({
        ...prev,
        table: {
          error: true,
          errorMsg: "cell already occupied",
        },
      }));
      return false;
    } else {
      return true;
    }
  };

  const addCourseToTable = (classes) => {
    setUserUX((prev) => ({
      ...prev,
      table: {
        error: false,
        errorMsg: "",
      },
    }));

    if (courseInstancesIds.includes(classes[0].courseInstanceId)) {
      setUserUX((prev) => ({
        ...prev,
        table: {
          error: true,
          errorMsg: "course already occupied",
        },
      }));
      return;
    }
    const cellAvailable = findCellAvailable(classes);
    if (cellAvailable) {
      const newTableData = [...tableData, ...classes];
      setTableData(newTableData);
    }
  };

  const removeCourseFromTable = (classes) => {
    setUserUX((prev) => ({
      ...prev,
      table: {
        error: false,
        errorMsg: "",
      },
    }));
    const newTableData = tableData.filter((obj) => {
      return obj.courseInstanceId !== classes[0].courseInstanceId;
    });
    setTableData(newTableData);
  };

  const saveTableData = (event) => {
    event.preventDefault();
    const finalTableData = tableData.reduce((acc, current) => {
      const courseInstanceIndex = acc.findIndex(
        (courseInstance) =>
          courseInstance.courseInstanceId === current.courseInstanceId
      );
      if (courseInstanceIndex === -1) {
        // add new courseInstance
        acc.push({
          courseInstanceId: current.courseInstanceId,
          classes: [current.id],
        });
      } else {
        // add class to existing courseInstance
        acc[courseInstanceIndex].classes.push(current.id);
      }
      return acc;
    }, []);

    const backendData = { courseInstances: [...finalTableData] };
    if (tableRegistered.state) {
      // POST request to update student's schedule
      axios
        .post(
          STUDENT_URL +
            `/register/update?studentId=${authContext.id}&tableId=${tableRegistered.tableId}
            `,
          backendData
        )
        .then((res) => {
          console.log(res.data);
          setUserUX((prev) => ({
            ...prev,
            tableSubmit: {
              loading: false,
              error: false,
              errorMsg: "",
            },
          }));
        })
        .catch((err) => {
          console.log(err);
          setUserUX((prev) => ({
            ...prev,
            tableSubmit: {
              loading: false,
              error: true,
              errorMsg: "error in table submit",
            },
          }));
        });
    } else {
      // POST request to create a new student schedule
      axios
        .post(
          STUDENT_URL +
            `/register?studentId=${authContext.id}&semesterId=decc46ba-7d4b-11ed-a1eb-0242ac120002`,
          backendData
        )
        .then((res) => {
          console.log(res.data);
          setTableRegistered({ state: true, tableId: res.data.id });
          setUserUX((prev) => ({
            ...prev,
            tableSubmit: {
              loading: false,
              error: false,
              errorMsg: "",
            },
          }));
        })
        .catch((err) => {
          console.log(err);
          setUserUX((prev) => ({
            ...prev,
            tableSubmit: {
              loading: false,
              error: true,
              errorMsg: "error in table submit",
            },
          }));
        });
    }
    setUserUX((prev) => ({
      ...prev,
      tableSubmit: { loading: true, error: false, errorMsg: "" },
      table: { error: false, errorMsg: "" },
    }));
  };

  return (
    <SidebarCont>
      <VerticalTable headings={StudentTableHeadings} data={testingStudent} />
      {userUX.table.error && (
        <h1>
          <h1>{userUX.table.errorMsg}</h1>
          <h1>{userUX.table.errorMsg}</h1>
          <h1>{userUX.table.errorMsg}</h1>
          <h1>{userUX.table.errorMsg}</h1>
        </h1>
      )}
      {LEVELS.map((level) => {
        return (
          <div key={level.id} className="mb-5">
            <div className="commonTable">
              <h2>{level.level}</h2>
              <table>
                <tbody>
                  <tr>
                    {CoursesTableHeadings.map((heading) => (
                      <th key={heading.id}>{t(heading.label).toUpperCase()}</th>
                    ))}
                    <th>save/delete</th>
                  </tr>
                  {availableClasses
                    .filter((item) => item.level.level === level.id)
                    .map((item) => {
                      if (item.classes.length === 0) return null;
                      else {
                        return (
                          <tr key={item.classes[0].id}>
                            {CoursesTableHeadings.map((heading) => {
                              if (heading.name === "name") {
                                return (
                                  <td key={heading.id}>
                                    {i18next.language === "en"
                                      ? item.classes[0]["englishName"]
                                      : item.classes[0]["arabicName"]}
                                  </td>
                                );
                              } else {
                                return (
                                  <td key={heading.id}>
                                    {item.classes[0][heading.name]}
                                  </td>
                                );
                              }
                            })}
                            <td>
                              {courseInstancesIds.includes(
                                item.classes[0].courseInstanceId
                              ) ? (
                                <button
                                  onClick={() =>
                                    removeCourseFromTable(item.classes)
                                  }
                                >
                                  remove
                                </button>
                              ) : (
                                <button
                                  onClick={() => addCourseToTable(item.classes)}
                                >
                                  add
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
      <DayPeriodTable
        cellsSetter={handleCellsSetter}
        tableData={tableData}
        saveTableData={saveTableData}
      />
    </SidebarCont>
  );
};
