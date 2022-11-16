import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const registerValidator = yup.object().shape({
  firstname: yup
    .string()
    .min(2, "Firstname must be at least 2 character")
    .required("Firstname is required"),
  lastname: yup
    .string()
    .min(2, "Lastname must be at least 2 character")
    .required("Lastname is required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 character")
    .required("Username can not be empty!"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Email can not be empty!"),
  birthday: yup.date().required("Birthday is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 character")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password can not be empty!"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Cofirm password can not be empty!"),
  gender: yup.string().required("Gender must be selected!"),
});
