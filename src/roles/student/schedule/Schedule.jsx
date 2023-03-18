import { useState, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { STUDENT_URL } from "../../../shared/API";
import axios from "axios";

// Reusable Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { DayPeriodTable } from "../../../components/table/schedule/DayPeriodTable";

export const Schedule = () => {
  const [tableData, setTableData] = useState([]);
  const [userUX, setUserUX] = useState({
    tableData: {
      loading: false,
      tableRegistered: false,
      error: false,
      errorMsg: "",
    },
  });
  const authContext = useAuth();

  useEffect(() => {
    setUserUX((prev) => ({
      ...prev,
      tableData: { ...prev.tableData, loading: true },
    }));
    // GET request to get student schedule by student id
    axios
      .get(
        STUDENT_URL +
          `/table/${authContext.id}/decc46ba-7d4b-11ed-a1eb-0242ac120002`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data === null) {
          setTableData([]);
          setUserUX((prev) => ({
            ...prev,
            tableData: {
              loading: false,
              tableRegistered: false,
              error: false,
              errorMsg: "",
            },
          }));
        } else {
          setTableData(res.data.classes);
          setUserUX((prev) => ({
            ...prev,
            tableData: {
              loading: false,
              tableRegistered: true,
              error: false,
              errorMsg: "",
            },
          }));
        }
      })
      .catch((err) => {
        console.log(err);
        setUserUX((prev) => ({
          ...prev,
          tableData: {
            loading: false,
            error: true,
            tableRegistered: false,
            errorMsg: "error in student table data",
          },
        }));
      });
  }, [authContext.id]);

  return (
    <SidebarCont>
      <DayPeriodTable
        tableData={tableData}
        cellsSetter={() => {}}
        view={true}
      />
    </SidebarCont>
  );
};
