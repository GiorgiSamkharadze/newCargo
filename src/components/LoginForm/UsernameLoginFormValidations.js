import vest, {validate, test, enforce} from "vest";

export const usernameLoginFormValidations = (data, field) => {
    return validate("UsernameLoginForm", () => {
        vest.only(field);

        ["username", "password"].forEach((elem) => {
            test(elem, "This field is required", () => {
                enforce(data[elem].toString()).isNotEmpty();
            });
        });

        test("username", data.username.concat(" is not a valid username"), () => {
            enforce(data.username.toString())
                .isNotEmpty()
                .matches(/^(?=.{4,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9._]+(?<![.])$/g);
        });

        test("password", "Password should be atleast 8 characters long", () => {
            enforce(data.password.toString()).longerThanOrEquals(8);
        });
    });
};
