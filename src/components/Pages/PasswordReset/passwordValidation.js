import vest, { validate, test, enforce } from "vest";
import { truncate } from "utils";

const passwordValidation = (data, field, formatMessage) => {
  return validate("Password", () => {
    vest.only(field);

    test("password", "This field is required", () => {
      enforce(data.password.toString()).isNotEmpty();
    });

    const trimmedPassword = truncate(data.password.toString(), 15);
    test("password", trimmedPassword + " is not valid password.", () => {
      enforce(data.password.toString())
        .isNotEmpty()
        // eslint-disable-next-line
        .matches(/^[^-\s]{8,}$/);
    });
  });
};

export default passwordValidation;
