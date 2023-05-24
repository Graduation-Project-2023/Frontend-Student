import { SidebarCont } from "../../../components/header/SidebarCont";
import { BiPrinter } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export const Receipts = () => {
  const { t } = useTranslation();
  return (
    <SidebarCont>
      <div>
        <table className="paymentTable">
          <tr>
            <th className="paymentTable-header">{t("receipts.semester")}</th>
          </tr>
          <tr>
            <td className="paymentTable-content">
              <div> {t("receipts.creditHrs")}</div>
              <div>
                19{" "}
                <span className="paymentTable-content-price">
                  {t("receipts.hrs")}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="paymentTable-content">
              <div>{t("receipts.annual")}</div>
              <div>
                615{" "}
                <span className="paymentTable-content-price">
                  {t("receipts.EGP")}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="paymentTable-content">
              <div>
                {t("receipts.retake")}
                <span className="paymentTable-content-ex">
                  /{t("receipts.per")}
                </span>
              </div>
              <div>
                50{" "}
                <span className="paymentTable-content-price">
                  {t("receipts.EGP")}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="paymentTable-content">
              <div>{t("receipts.book")}</div>
              <div>
                320{" "}
                <span className="paymentTable-content-price">
                  {t("receipts.EGP")}
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="paymentTable-content">
              <div> {t("receipts.totalFees")}</div>
              <div>
                1000{" "}
                <span className="paymentTable-content-price">
                  {t("receipts.EGP")}{" "}
                </span>
              </div>
            </td>
          </tr>
        </table>
        <div className="receiptsBtn">
          <button className="button button-save">
            {t("receipts.print")} <BiPrinter />
          </button>
        </div>
        <div className="dashedScissor">
          <div className="Scissor">
            <HiScissors />
          </div>
          <div className="dashedLine"></div>
        </div>
      </div>
    </SidebarCont>
  );
};
