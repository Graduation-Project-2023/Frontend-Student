import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { STUDENT_URL } from "../../../shared/API";

// Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { PaymentCard } from "../../../components/table/payment/PaymentCard";
import { Backdrop } from "../../../components/loaders/Backdrop";
import { Alert } from "react-bootstrap";

export const Receipts = () => {
  const [receipts, setReceipts] = useState([]);
  const [userUX, setUserUX] = useState({
    loading: true,
    error: false,
  });
  const authContext = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    setUserUX({ loading: true, error: false });
    axios
      .get(
        STUDENT_URL +
          `/trx/email/${authContext.token}?studentId=${authContext.id}`
      )
      .then((res) => {
        console.log(res);
        setReceipts(res.data);
        setUserUX({ loading: false, error: false });
      })
      .catch((err) => {
        console.log(err);
        setUserUX({ loading: false, error: true });
      });
    // eslint-disable-next-line
  }, [authContext.token]);

  return (
    <>
      {userUX.loading && <Backdrop />}
      <SidebarCont>
        {(userUX.error || receipts.length === 0) && !userUX.loading ? (
          <Alert variant="danger">
            {receipts.length === 0 ? t("error.noRcpts") : t("error.common")}
          </Alert>
        ) : (
          receipts.map((item) => {
            return <PaymentCard key={item.id} />;
          })
        )}
      </SidebarCont>
    </>
  );
};
