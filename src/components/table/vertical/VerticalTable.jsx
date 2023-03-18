import { useTranslation } from "react-i18next";

// Component Props:
// headings: array of objects {id, label, name}
// data: object of student's data

export const VerticalTable = (props) => {
  const { t } = useTranslation();
  return (
    <div className="verticalTable">
      <table>
        <tbody>
          {props.headings.map((heading) => {
            return (
              <tr key={heading.id}>
                <th>{t(heading.cols[0].label)}</th>
                <td>{props.data[heading.cols[0].name]}</td>
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
