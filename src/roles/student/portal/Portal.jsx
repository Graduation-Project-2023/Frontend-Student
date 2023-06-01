import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { STUDENT_URL } from "../../../shared/API";
import { SidebarCont } from "../../../components/header/SidebarCont";
import { useTranslation } from "react-i18next";
import { StudentInfoData } from "./StudentInfoData";
import axios from "axios";
import { LoadingInput } from "../../../components/loaders/LoadingInput";

export const Portal = () => {
  const [studentData, setStudentData] = useState({});
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const authContext = useAuth();
  const { t } = useTranslation();

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
        authContext.studentHandler(res.data);
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

  const dateFormatter = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  // const functionTest = () => {
  //   const dataTypes = {
  //     name1: "englishName",
  //     name2: "arabicName",
  //   };

  //   console.log(studentData[dataTypes.name1]);
  // };

  return (
    <SidebarCont>
      <div className="main-container">
        <h1>{t("student.info")}</h1>
        <div className="main-container-data">
          {StudentInfoData.map((item) => {
            return (
              <section className="section-container" key={item.id}>
                <h3>{t(item.title)}</h3>
                <div className="section-container-data">
                  {item.data.map((dataItem) => {
                    if (dataItem.row) {
                      return userUX.loading ? (
                        <LoadingInput
                          row={true}
                          label={t(dataItem.title)}
                          key={dataItem.id}
                        />
                      ) : (
                        <div className="col-lg-12 mb-4" key={dataItem.id}>
                          <label className="form-label">
                            {t(dataItem.title)}
                          </label>
                          <div>
                            {dataItem.type === "textarea" ? (
                              <textarea
                                readOnly
                                className="form-control"
                                defaultValue={
                                  studentData[dataItem.name] === null ||
                                  studentData[dataItem.name] === undefined
                                    ? t("enums.null")
                                    : dataItem.enum
                                    ? t(`enums.${studentData[dataItem.name]}`)
                                    : dataItem.date
                                    ? dateFormatter(studentData[dataItem.name])
                                    : studentData[dataItem.name]
                                }
                              ></textarea>
                            ) : (
                              <input
                                readOnly
                                type={"text"}
                                defaultValue={
                                  studentData[dataItem.name] === null ||
                                  studentData[dataItem.name] === undefined
                                    ? t("enums.null")
                                    : dataItem.enum
                                    ? t(`enums.${studentData[dataItem.name]}`)
                                    : dataItem.date
                                    ? dateFormatter(studentData[dataItem.name])
                                    : studentData[dataItem.name]
                                }
                                className="form-control"
                              />
                            )}
                          </div>
                        </div>
                      );
                    } else {
                      return userUX.loading ? (
                        <LoadingInput
                          splitLabel={[
                            { id: 0, label: t(dataItem.splitRow[0].title) },
                            { id: 1, label: t(dataItem.splitRow[1].title) },
                          ]}
                          key={dataItem.id}
                        />
                      ) : (
                        <div className="row" key={dataItem.id}>
                          {dataItem.splitRow.map((splitData) => {
                            return (
                              <div className="col-lg-6 mb-4" key={splitData.id}>
                                <label className="form-label">
                                  {t(splitData.title)}
                                </label>
                                <div>
                                  <input
                                    readOnly
                                    type="text"
                                    defaultValue={
                                      studentData[splitData.name] === null ||
                                      studentData[splitData.name] === undefined
                                        ? t("enums.null")
                                        : splitData.enum
                                        ? t(
                                            `enums.${
                                              studentData[splitData.name]
                                            }`
                                          )
                                        : splitData.date
                                        ? dateFormatter(
                                            studentData[splitData.name]
                                          )
                                        : studentData[splitData.name]
                                    }
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </SidebarCont>
  );
};
