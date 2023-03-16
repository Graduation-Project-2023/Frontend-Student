import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { STUDENT_URL } from "../../../shared/API";
import { SidebarCont } from "../../../components/header/SidebarCont";
import { useTranslation } from "react-i18next";
import { StudentInfoData } from "./StudentInfoData";
import axios from "axios";

export const Portal = () => {
  const [studentData, setStudentData] = useState({});
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const authContext = useAuth();
  const { t } = useTranslation();
  // const config = {
  //   headers: { Authorization: `Bearer ${authContext.token}` },
  // };

  useEffect(() => {
    setUserUX((prev) => ({
      ...prev,
      loading: true,
    }));
    // GET request to get student data by it's id
    axios
      .get(STUDENT_URL + `/info?studentId=${authContext.id}`)
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
          error: true,
          errorMsg: "student data error",
        }));
      });
    // eslint-disable-next-line
  }, [authContext.token]);

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
                      {`${t(items.title)}`}
                    </span>
                    {userUX.error ? (
                      userUX.errorMsg
                    ) : userUX.loading ? (
                      <span>loading....</span>
                    ) : items.enum === true ? (
                      <span>{t(`enums.${studentData[items.name]}`)}</span>
                    ) : (
                      <span>
                        {studentData[items.name] === null
                          ? t("enums.null")
                          : studentData[items.name]}
                      </span>
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
