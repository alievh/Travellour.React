import * as yup from "yup";

export const loginValidator = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 character")
    .required("Username can not be empty!"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 character")
    .required("Password can not be empty!"),
});
