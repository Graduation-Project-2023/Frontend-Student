import { useState } from "react";

// Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { ChooseMethod } from "./ChooseMethod";
import { PaymentCard } from "../../../components/table/payment/PaymentCard";

export const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(false);

  const handlePay = () => {
    setPaymentMethod(true);
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
      <PaymentCard payment={true} handlePay={handlePay} />
    </SidebarCont>
  );
};
