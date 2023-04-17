import { SidebarCont } from "../../../components/header/SidebarCont";

export const Payment = () => {
  const handlePay = () => {
    window.open(
      "http://localhost:3000/portal/student/fees/dd134isdfgn",
      "payment_gateway",
      "menubar=1,resizable=1,width=900,height=700"
    );
  };

  return (
    <SidebarCont>
      <button onClick={handlePay}> pay now</button>
    </SidebarCont>
  );
};
