import { useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const ChooseMethod = (props) => {
  const { show, hide } = props;
  const [phone, setPhone] = useState({ state: false, number: "" });
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    if (e.target.value === "wallet") {
      setPhone({ state: true, number: "" });
    } else {
      setPhone({ state: false, number: "" });
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();

    const selectedPayment = e.target.elements.payment.value;
    if (selectedPayment === "credit") {
      // send req to backend
      console.log(selectedPayment);
    } else if (selectedPayment === "wallet") {
      // show phone number input box
      console.log(selectedPayment);
    }
  };

  return (
    <Modal show={show} onHide={hide}>
      <Form onSubmit={handlePayment}>
        <Modal.Header>
          <Modal.Title>{t("payment.choose")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          {phone.state && (
            <Form.Group className="m-3" controlId="phone">
              <Form.Label>{t("common.phone")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("common.phone")}
                value={phone.number}
                onChange={(e) => setPhone({ ...phone, number: e.target.value })}
                required
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            {t("payment.button")}
          </Button>
          <Button variant="secondary" onClick={hide}>
            {t("common.cancel")}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
