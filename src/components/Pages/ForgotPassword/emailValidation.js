import vest, { validate, test, enforce } from "vest";
import { truncate } from "utils";

const emailValidation = (data, field, formatMessage) => {
  return validate("Email", () => {
    vest.only(field);

    test("email", "This field is required", () => {
      enforce(data.email.toString()).isNotEmpty();
    });

    const trimmedEmail = truncate(data.email.toString(), 15);
    test("email", trimmedEmail + " is not valid email address.", () => {
      enforce(data.email.toString())
        .isNotEmpty()
        // eslint-disable-next-line
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    });
  });
};

export default emailValidation;
