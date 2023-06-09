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
  const { t, i18n } = useTranslation();
  const authContext = useAuth();

  const handleChange = (e) => {
    if (e.target.value === "wallet") {
      setPhone({ state: true, number: "", error: false });
    } else {
      setPhone({ state: false, number: "", error: false });
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setUserUX((prev) => ({ ...prev, loading: true }));
    const selectedPayment = e.target.elements.payment.value;
    const billingData = {
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
    };
    if (selectedPayment === "wallet") {
      if (phone.number.length !== 11) {
        setPhone((prev) => ({ ...prev, error: true }));
        return;
      }
      setPhone((prev) => ({ ...prev, error: false }));
      axios
        .post(STUDENT_URL + `/payment?studentId=${authContext.id}`, {
          type: "wallet",
          identifier: "01010101010",
          order_cart: [
            {
              name: "iphone x",
              amount_cents: "2400000",
              description: "iphone x 64GB",
              quantity: "1",
            },
          ],
          billing_data: billingData,
          amount_cents: "2400000",
        })
        .then((res) => {
          setUserUX((prev) => ({ ...prev, loading: false }));
          setIsPaying({ state: true, url: res.data });
          console.log(res.data);
        })
        .catch((err) => {
          setUserUX({ loading: false, error: true, errorMsg: err });
          console.log(err);
        });
    } else {
      axios
        .post(STUDENT_URL + `/payment?studentId=${authContext.id}`, {
          type: selectedPayment,
          order_cart: [
            {
              name: "iphone x",
              amount_cents: "2400000",
              description: "iphone x 64GB",
              quantity: "1",
            },
          ],
          billing_data: billingData,
          amount_cents: "2400000",
        })
        .then((res) => {
          setUserUX((prev) => ({ ...prev, loading: false }));
          console.log(res.data);
          if (selectedPayment === "koshk") {
            setKoshk({ state: true, data: res.data });
          } else if (selectedPayment === "credit") {
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

  const hideModal = () => {
    if (userUX.loading) {
      return;
    }
    hide();
  };

  return (
    <Modal show={show} onHide={hideModal}>
      <Form onSubmit={handlePayment}>
        <Modal.Header>
          <Modal.Title>
            {isPaying.state
              ? t("payment.payment")
              : koshk.state
              ? t("payment.koshkTitle")
              : t("payment.choose")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <iframe
                src={isPaying.url}
                width="100%"
                height="100%"
                title="payment"
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
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  reverse={i18n.language === "ar"}
                  label={t("payment.credit")}
                  name="payment"
                  type="radio"
                  id="credit"
                  inline
                  value="credit"
                  onChange={handleChange}
                  required
                />
                <Form.Check
                  reverse={i18n.language === "ar"}
                  label={t("payment.koshk")}
                  name="payment"
                  type="radio"
                  id="koshk"
                  inline
                  value="koshk"
                  onChange={handleChange}
                  required
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
              <Button type="submit" variant="primary" disabled={userUX.loading}>
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
