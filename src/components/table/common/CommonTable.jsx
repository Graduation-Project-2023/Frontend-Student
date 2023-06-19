import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

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
              {props.headings.map((heading) => {
                if (heading.name === "name") {
                  i18next.language === "en"
                    ? (item[heading.name] = item.englishName)
                    : (item[heading.name] = item.arabicName);
                } else if (heading.name === "courseType") {
                  return (
                    <td key={heading.id}>{t(`enums.${item[heading.name]}`)}</td>
                  );
                } else if (
                  heading.name === "unlocked" ||
                  heading.name === "finished"
                ) {
                  return (
                    <td key={heading.id}>
                      {item[heading.name] ? (
                        <AiOutlineCheck />
                      ) : (
                        <AiOutlineClose />
                      )}
                    </td>
                  );
                }
                return <td key={heading.id}>{item[heading.name]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
