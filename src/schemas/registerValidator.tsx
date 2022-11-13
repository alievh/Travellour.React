import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const loginValidator = yup.object().shape({
  FirstName: yup
    .string()
    .min(2, "Firstname must be at least 2 character")
    .required("Required"),
  LastName: yup
    .string()
    .min(2, "Lastname must be at least 2 character")
    .required("Required"),
  userName: yup
    .string()
    .min(3, "Username must be at least 3 character")
    .required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 character")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Required"),
});
