import { useTranslation } from "react-i18next";

// Component Props:
// header: string
// headings: array of objects {id, label, name}
// data: array of objects

export const CommonTable = (props) => {
  const { t } = useTranslation();
  return (
    <div className="commonTable">
      <h2>{t(props.header)}</h2>
      <table>
        <tbody>
          <tr>
            {props.headings.map((heading) => (
              <th key={heading.id}>{t(heading.label).toUpperCase()}</th>
            ))}
          </tr>
          {props.data.map((item) => (
            <tr key={item.id}>
              {props.headings.map((heading) => (
                <td key={heading.id}>{item[heading.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
