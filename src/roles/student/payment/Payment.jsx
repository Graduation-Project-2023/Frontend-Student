import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

// Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { BiPrinter } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { ChooseMethod } from "./ChooseMethod";

export const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(false);
  const { t } = useTranslation();
  const printAreaRef = useRef();

  const handlePay = () => {
    setPaymentMethod(true);
  };

  const handlePrint = () => {
    const printArea = printAreaRef.current;
    if (printArea) {
      const printContents = printArea.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  };

  return (
    <SidebarCont>
      {paymentMethod && (
        <ChooseMethod
          show={paymentMethod}
          hide={() => {
            setPaymentMethod(false);
          }}
        />
      )}
      <div>
        <div ref={printAreaRef}>
          <table className="paymentTable">
            <thead>
              <tr>
                <th className="paymentTable-header">
                  {t("receipts.semester")}
                </th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <div className="receiptsBtn">
          <button className="button button-save" onClick={handlePay}>
            {t("receipts.pay")} <AiOutlineCreditCard />
          </button>
          <button className="button button-save" onClick={handlePrint}>
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
