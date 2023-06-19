import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";

export const PaymentCard = (props) => {
  const { handlePay, payment } = props;
  const { t } = useTranslation();
  const printAreaRef = useRef();

  const handlePrint = () => {
    const printArea = printAreaRef.current;
    if (printArea) {
      const printContents = printArea.innerHTML;
      const originalContents = document.body.innerHTML;
      const stylesheets = Array.from(document.styleSheets);

      const printWindow = window.open("", "_blank", "width=1000,height=800");
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            ${stylesheets
              .map((sheet) => `<link rel="stylesheet" href="${sheet.href}" />`)
              .join("")}
            <style>
              ${Array.from(document.getElementsByTagName("style"))
                .map((style) => style.innerHTML)
                .join("")}
            </style>
          </head>
          <body>${printContents}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.onafterprint = () => {
        printWindow.close();
        document.body.innerHTML = originalContents;
      };
    }
  };
  
  return (
    <div>
      <div ref={printAreaRef}>
        <table className="paymentTable">
          <thead>
            <tr>
              <th className="paymentTable-header">{t("receipts.semester")}</th>
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
        {payment && (
          <button
            className="button button-save"
            onClick={handlePay}
            style={{ margin: "10px 0px 0px" }}
          >
            {t("receipts.pay")} <AiOutlineCreditCard />
          </button>
        )}
        <button
          className="button button-save"
          onClick={handlePrint}
          style={{ margin: "10px 10px 0px" }}
        >
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
  );
};
