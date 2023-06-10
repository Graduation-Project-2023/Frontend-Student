import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../../hooks/useAuth";
import { STUDENT_URL } from "../../../shared/API";
import axios from "axios";

// Components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export const ChooseMethod = (props) => {
  const { show, hide } = props;
  const [phone, setPhone] = useState({
    state: false,
    number: "",
    error: false,
  });
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const [isPaying, setIsPaying] = useState({ state: false, url: "" });
  const [koshk, setKoshk] = useState({ state: false, data: {} });
  const [frameLoading, setFrameLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { t, i18n } = useTranslation();
  const authContext = useAuth();

  const handlePayment = (e) => {
    e.preventDefault();
    console.log(paymentMethod);
    if (paymentMethod === "") {
      setUserUX((prev) => ({
        ...prev,
        error: true,
        errorMsg: "payment.chooseMethod",
      }));
      return;
    }
    setUserUX((prev) => ({ ...prev, loading: true }));
    const paymentData = {
      type: paymentMethod,
      order_cart: [
        {
          name: "College Fees",
          amount_cents: "240000",
          description: "Semester Fees for 2022/2023",
          quantity: "1",
        },
      ],
      billing_data: {
        apartment: "NA",
        email: authContext.token,
        floor: "NA",
        first_name: authContext.student.arabicName,
        street: authContext.student.address,
        building: "NA",
        phone_number: phone.number || authContext.student.contactPhone,
        shipping_method: "NA",
        postal_code: "NA",
        city: "NA",
        country: "EG",
        last_name: authContext.student.englishName,
        state: "NA",
      },
      amount_cents: "240000",
    };
    if (paymentData === "wallet") {
      if (phone.number.length !== 11) {
        setPhone((prev) => ({ ...prev, error: true }));
        return;
      }
      setPhone((prev) => ({ ...prev, error: false }));
      axios
        .post(STUDENT_URL + `/payment?studentId=${authContext.id}`, {
          ...paymentData,
          identifier: phone.number,
        })
        .then((res) => {
          setUserUX((prev) => ({ ...prev, loading: false }));
          window.location.href = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          setUserUX({ loading: false, error: true, errorMsg: err });
          console.log(err);
        });
    } else {
      axios
        .post(STUDENT_URL + `/payment?studentId=${authContext.id}`, paymentData)
        .then((res) => {
          setUserUX((prev) => ({ ...prev, loading: false }));
          console.log(res.data);
          if (paymentMethod === "koshk") {
            setKoshk({ state: true, data: res.data });
          } else if (paymentMethod === "card") {
            setFrameLoading(true);
            setIsPaying({
              state: true,
              url: `https://accept.paymob.com/api/acceptance/iframes/416800?payment_token=${res.data}`,
            });
          }
        })
        .catch((err) => {
          setUserUX({ loading: false, error: true, errorMsg: err });
          console.log(err);
        });
    }
  };

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
    if (e.target.value === "wallet") {
      setPhone({ state: true, number: "", error: false });
    } else {
      setPhone({ state: false, number: "", error: false });
    }
  };

  const hideModal = () => {
    if (userUX.loading || isPaying.state) {
      return;
    }
    hide();
  };

  return (
    <Modal show={show} onHide={hideModal}>
      <Form>
        {!isPaying.state && (
          <Modal.Header>
            <Modal.Title>
              {koshk.state ? t("payment.koshkTitle") : t("payment.choose")}
            </Modal.Title>
          </Modal.Header>
        )}

        <Modal.Body style={{ padding: isPaying ? "0" : "" }}>
          {koshk.state && (
            <>
              <Alert variant="info">{t("payment.koshkMsg")}</Alert>
              <ListGroup>
                <ListGroup.Item>
                  {t("payment.billRef")}: {koshk.data.bill_reference}
                </ListGroup.Item>
                <ListGroup.Item>
                  {t("payment.amount")}: {koshk.data.amount}
                </ListGroup.Item>
                <ListGroup.Item>
                  {t("payment.notes")}: {koshk.data.message}
                </ListGroup.Item>
              </ListGroup>
            </>
          )}
          {isPaying.state ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "80vh",
              }}
            >
              {frameLoading && (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                >
                  <Spinner
                    animation="grow"
                    variant="primary"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              )}
              <iframe
                src={isPaying.url}
                width="100%"
                height="100%"
                title={t("payment.usingWallet")}
                onLoad={() => {
                  setFrameLoading(false);
                }}
              />
            </div>
          ) : (
            !koshk.state && (
              <>
                <Form.Check
                  reverse={i18n.language === "ar"}
                  label={t("payment.wallet")}
                  name="payment"
                  type="radio"
                  id="wallet"
                  value="wallet"
                  inline
                  onChange={handlePaymentMethod}
                  required
                  disabled={userUX.loading}
                />
                <Form.Check
                  reverse={i18n.language === "ar"}
                  label={t("payment.credit")}
                  name="payment"
                  type="radio"
                  id="card"
                  inline
                  value="card"
                  onChange={handlePaymentMethod}
                  required
                  disabled={userUX.loading}
                />
                <Form.Check
                  reverse={i18n.language === "ar"}
                  label={t("payment.koshk")}
                  name="payment"
                  type="radio"
                  id="koshk"
                  inline
                  value="koshk"
                  onChange={handlePaymentMethod}
                  required
                  disabled={userUX.loading}
                />
                {phone.state && (
                  <Form.Group className="m-3" controlId="phone">
                    <Form.Label>{t("common.phone")}</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={t("common.phone")}
                      value={phone.number}
                      onChange={(e) =>
                        setPhone({ ...phone, number: e.target.value })
                      }
                      required
                    />
                    {phone.error && (
                      <Form.Text className="text-danger">
                        {t("payment.phoneError")}
                      </Form.Text>
                    )}
                  </Form.Group>
                )}
              </>
            )
          )}
        </Modal.Body>
        {!isPaying.state && (
          <Modal.Footer>
            {!koshk.state && (
              <Button
                type="submit"
                variant="primary"
                disabled={userUX.loading}
                onClick={handlePayment}
              >
                {userUX.loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  t("payment.button")
                )}
              </Button>
            )}

            <Button
              variant="secondary"
              onClick={hideModal}
              disabled={userUX.loading}
            >
              {koshk.state ? t("common.close") : t("common.cancel")}
            </Button>
          </Modal.Footer>
        )}
      </Form>
    </Modal>
  );
};
