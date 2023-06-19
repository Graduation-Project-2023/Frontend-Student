import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";

// Component Props:
// headings: array of objects {id, label, name}
// data: object of student's data

export const VerticalTable = (props) => {
  const { t, i18n } = useTranslation();
  const authContext = useAuth();
  return (
    <div className="verticalTable">
      <table>
        <tbody>
          {props.headings.map((heading) => {
            console.log(heading);
            return (
              <tr key={heading.id}>
                <th>{t(heading.cols[0].label)}</th>
                <td>
                  {heading.cols[0].name === "name"
                    ? i18n.language === "en"
                      ? authContext.student.englishName
                      : authContext.student.arabicName
                    : props.data[heading.cols[0].name]}
                </td>
                <th>{t(heading.cols[1].label)}</th>
                <td>{props.data[heading.cols[1].name]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
