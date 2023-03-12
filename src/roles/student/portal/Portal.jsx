import { useEffect, useState } from "react";
import { STUDENT_URL } from "../../../shared/API";
import { useParams } from "react-router-dom";
import { SidebarCont } from "../../../components/header/SidebarCont";
import { useTranslation } from "react-i18next";
import { StudentInfoData } from "./StudentInfoData";
import axios from "axios";

export const Portal = () => {
  const { t } = useTranslation();
  const { studentId } = useParams();
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const [studentData, setStudentData] = useState({});

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
      {StudentInfoData.map((item) => {
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
