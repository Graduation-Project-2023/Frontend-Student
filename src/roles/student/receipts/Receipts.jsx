import { SidebarCont } from "../../../components/header/SidebarCont";
import { BiPrinter } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";

export const Receipts = () => {
  return (
    <SidebarCont>
      <table className="paymentTable">
        <tr>
          <th className="paymentTable-header"> First semester 2022/2023</th>
          <th className="paymentTable-header"> </th>
        </tr>
        <tr>
          <td className="paymentTable-content">Number of credit hours</td>
          <td className="paymentTable-content">
            19 <span className="paymentTable-content-price">Cr.hrs </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">Annual fees</td>
          <td className="paymentTable-content">
            615 <span className="paymentTable-content-price">EGP </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">
            Retake fees
            <span className="paymentTable-content-ex">/50 per subject</span>
          </td>
          <td className="paymentTable-content">
            50 <span className="paymentTable-content-price">EGP </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">Book fees</td>
          <td className="paymentTable-content">
            320 <span className="paymentTable-content-price">EGP </span>
          </td>
        </tr>
        <tr>
          <td className="paymentTable-content">Total fees</td>
          <td className="paymentTable-content">
            1000 <span className="paymentTable-content-price">EGP </span>
          </td>
        </tr>
      </table>
      <button className="paymentBtn">
        Print <BiPrinter />
      </button>
      <div>
        <span className="paymentScissor">
          <HiScissors />
        </span>
        <span className="paymentLine"> </span>
      </div>
    </SidebarCont>
  );
};
