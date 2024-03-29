import { useTranslation } from "react-i18next";
import Spinner from "react-bootstrap/Spinner";

// Component Props:
// type: string
// style: string
// label: string
// click: function
// disabled: boolean

export const FormButton = (props) => {
  const { t } = useTranslation();

  if (props.type === "loading") {
    return (
      <button
        className="form-card-button form-card-button-save d-flex align-items-center justify-content-center"
        disabled
        style={{ width: "200px", padding: "10px" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </button>
    );
  } else {
    return (
      <button
        type={`${props.type}`}
        className={`form-card-button form-card-button-${props.styles}`}
        disabled={props.disabled}
        onClick={props.click}
      >
        {t(props.label)}
      </button>
    );
  }
};
