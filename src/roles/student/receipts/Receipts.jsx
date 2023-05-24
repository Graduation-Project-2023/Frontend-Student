import { SidebarCont } from "../../../components/header/SidebarCont";
import { BiPrinter } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export const Receipts = () => {
  const { t } = useTranslation();
  return (
    <SidebarCont>
      <table className="paymentTable">
        <tr>
          <th className="paymentTable-header" colspan="2"> {t("receipts.semester")}</th>
          <th className="paymentTable-header"> </th>
        </tr>
        <tr>
          <td className="paymentTable-content">{t("receipts.creditHrs")}</td>
          <td className="paymentTable-content-total">
            19 <span className="paymentTable-content-price">{t("receipts.hrs")}  </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">{t("receipts.annual")}</td>
          <td className="paymentTable-content-total">
            615 <span className="paymentTable-content-price">{t("receipts.EGP")} </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">
          {t("receipts.retake")}
            <span className="paymentTable-content-ex">/{t("receipts.per")}</span>
          </td>
          <td className="paymentTable-content-total">
            50 <span className="paymentTable-content-price">{t("receipts.EGP")}  </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">{t("receipts.book")}</td>
          <td className="paymentTable-content-total">
            320 <span className="paymentTable-content-price">{t("receipts.EGP")}  </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">{t("receipts.totalFees")}</td>
          <td className="paymentTable-content-total">
            1000 <span className="paymentTable-content-price">{t("receipts.EGP")}  </span>
          </td>
        </tr>
      </table>
      <div className="receiptsBtn">
      <button className="receiptsBtn-design">
      {t("receipts.print")} <BiPrinter />
      </button>
      </div>
      <div className="dashedScissor">
        <div className="Scissor">
          <HiScissors />
        </div>
        <div className="dashedLine"> 
        </div>
      </div>
    </SidebarCont>
  );
};
