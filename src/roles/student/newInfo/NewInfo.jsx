import { NewHeader } from "./NewHeader";
import { NewNavbar } from "./NewNavbar";
import { useTranslation } from "react-i18next";
import { StudentInfoDataTEST } from "./StudentInfoData";
import profile from "./profile.png";

export const NewInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewHeader />
      <NewNavbar navType={2} />
      <div className="main-container">
        <h1>بيانات الطالب</h1>
        <div className="main-container-data">
          {StudentInfoDataTEST.map((item) => {
            if (item.header) {
              return (
                <section className="section-container" key={item.id}>
                  <h3>{t(item.title)}</h3>
                  <div className="section-container-header">
                    <div className="section-container-header-img">
                      <img src={profile} alt="profile" />
                    </div>
                    <div className="section-container-header-data">
                      {item.headerData.map((headerItem) => {
                        return (
                          <div className="m-2 row" key={headerItem.id}>
                            <label
                              htmlFor={headerItem.title}
                              className="col-lg-3 col-form-label"
                            >
                              {t(headerItem.title)} :
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                readOnly
                                className="form-control-plaintext"
                                defaultValue={headerItem.name}
                                label={headerItem.title}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="section-container-data">
                    {item.data.map((dataItem) => {
                      if (dataItem.row) {
                        return (
                          <div className="col-lg-12 mb-4" key={dataItem.id}>
                            <label className="form-label">
                              {t(dataItem.title)}
                            </label>
                            <div>
                              <input
                                readOnly
                                type="text"
                                defaultValue={dataItem.name}
                                className="form-control"
                              />
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div className="row" key={dataItem.id}>
                            {dataItem.splitRow.map((splitData) => {
                              return (
                                <div
                                  className="col-lg-6 mb-4"
                                  key={splitData.id}
                                >
                                  <label className="form-label">
                                    {t(splitData.title)}
                                  </label>
                                  <div>
                                    <input
                                      readOnly
                                      type="text"
                                      defaultValue={splitData.name}
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
            } else {
              return (
                <section className="section-container" key={item.id}>
                  <h3>{t(item.title)}</h3>
                  <div className="section-container-data">hello</div>
                </section>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
