import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScheduleTableBody, ScheduleTableHeader } from "./DayPeriodData";
import i18next from "i18next";
import styles from "./DayPeriodTable.module.scss";

export const DayPeriodTable = (props) => {
  const [tableData, setTableData] = useState(props.tableData);
  const [cells, setCells] = useState({ occupied: [], available: [] });
  const { t } = useTranslation();

  useEffect(() => {
    setTableData(props.tableData);
  }, [props.tableData]);

  useEffect(() => {
    const occupiedCells = [];
    let availableCells = [];

    ScheduleTableBody.forEach((item) => {
      for (let i = 1; i <= 20; i++) {
        availableCells.push({ period: i, day: item.day });
      }
    });

    if (tableData.length === 0) {
      props.cellsSetter(occupiedCells, availableCells);
      return;
    }

    tableData.forEach((item) => {
      for (let i = item.startPeriod; i <= item.endPeriod; i++) {
        occupiedCells.push({ period: i, day: item.day });
      }
    });
    availableCells = availableCells.filter((item) => {
      return !occupiedCells.some((cell) => {
        return cell.period === item.period && cell.day === item.day;
      });
    });
    setCells((current) => {
      return {
        ...current,
        occupied: occupiedCells,
        available: availableCells,
      };
    });
    props.cellsSetter(occupiedCells, availableCells);
    // eslint-disable-next-line
  }, [tableData]);

  return (
    <form
      onSubmit={(event) => {
        props.saveTableData(event);
      }}
    >
      <div className={styles.tableContainer_tableCard}>
        <div className={styles.tableContainer_tableCard_wrap}>
          <table
            className={`table table-bordered ${styles.tableContainer_tableCard_wrap_scroll}`}
          >
            <thead
              className={styles.tableContainer_tableCard_wrap_scroll_header}
            >
              <tr>
                {ScheduleTableHeader.map((item) => {
                  return (
                    <th
                      key={item.period}
                      className={`${
                        item.period === 0
                          ? styles.table_first_cell
                          : "table-container-header"
                      }`}
                    >
                      {item.period === 0 ? (
                        <>
                          <span className={styles.table_first_cell_up}>
                            {t("common.period")}
                          </span>
                          <span className={styles.table_first_cell_down}>
                            {t("common.day")}
                          </span>
                        </>
                      ) : (
                        <h6>
                          {t("common.period")} {item.period}
                        </h6>
                      )}
                      <h6>{item.time}</h6>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {ScheduleTableBody.map((item) => {
                const backendTableFiltered = tableData.filter(
                  (day) => item.day === day.day
                );
                return (
                  <tr key={item.id}>
                    <td
                      className={
                        styles.tableContainer_tableCard_wrap_scroll_days
                      }
                    >
                      {t(`week.${item.day.toLowerCase()}`)}
                    </td>
                    {item.cells.map((cell) => {
                      const cellFilter = backendTableFiltered.filter(
                        (obj) => obj.startPeriod === cell.period
                      );
                      if (cellFilter.length !== 0) {
                        return (
                          <td
                            key={cell.period}
                            className={styles.filled_cell}
                            colSpan={
                              cellFilter[0].endPeriod -
                              cellFilter[0].startPeriod +
                              1
                            }
                          >
                            <h6 key={cellFilter[0].id}>
                              {t(
                                `common.${cellFilter[0].classType.toLowerCase()}`
                              )}
                              &nbsp;-&nbsp;
                              {i18next.language === "en"
                                ? cellFilter[0].englishName
                                : cellFilter[0].arabicName}
                            </h6>
                            <span>
                              {i18next.language === "en"
                                ? "Professor Name"
                                : "اسم الدكتور"}
                            </span>
                            <span>
                              {i18next.language === "en" ? "Place" : "المكان"}
                            </span>
                          </td>
                        );
                      } else if (
                        cells.occupied.filter(
                          (obj) =>
                            obj.period === cell.period && obj.day === item.day
                        ).length !== 0
                      ) {
                        return null;
                      } else {
                        return (
                          <td
                            key={cell.period}
                            className={styles.empty_cell}
                          ></td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {!props.view && (
        <>
          <button
            type="submit"
            className="form-card-button form-card-button-save"
          >
            {t(`common.save`)}
          </button>
          <button
            type="reset"
            className="form-card-button form-card-button-cancel"
          >
            {t(`common.cancel`)}
          </button>
        </>
      )}
    </form>
  );
};
