import { SidebarCont } from "../../../components/header/SidebarCont";
import { useNavigate } from "react-router-dom";

export const Payment = () => {

  const navigate = useNavigate(); 
  const handlePay = () =>{  
    navigate("/paymentPopup");
  }
  
  return (
    <SidebarCont>
      <button onClick={handlePay}> pay now</button>
    </SidebarCont>
  );
};
