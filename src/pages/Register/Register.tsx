import React, { useState } from "react";
import AuthPoster from "../../components/AuthPoster/AuthPoster";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Col from "../../components/Bootstrap/Col";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import Loading from "../../components/Loading/Loading";
import { FormikProps, useFormik } from "formik";
import { registerValidator } from "../../schemas/registerValidator";

interface FormikModel {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  birthday: string;
  gender: string;
}

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  }: FormikProps<FormikModel> = useFormik<FormikModel>({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      birthday: "",
      gender: "",
    },
    validationSchema: registerValidator,
    async onSubmit() {
      setLoading(true);

      console.log(values.gender);

      const user = {
        firstName: values.firstname,
        lastName: values.lastname,
        userName: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmpassword,
        birthday: values.birthday,
        gender: values.gender,
      };

      await fetch(`${baseUrl}/authenticate/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setLoading(false);
        if (res.ok) {
          navigate("/");
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            setError(data.message.toString());
          });
        }
      });
    },
  });

  console.log(values);
  return (
    <main>
      {/* Register Section - START */}
      <section className="register-section">
        <AuthPoster />
        <Col lg="6" sm="12">
          <div className="register-section__auth">
            <div className="auth-container">
              <div className="auth-container__title">
                <h4>Travellour</h4>
                {loading && <Loading />}
                {error && <p className="register-error">{error}</p>}
              </div>
              {/* Register Form - START */}
              {!loading && (
                <form
                  onSubmit={handleSubmit}
                  className="auth-container__form"
                  autoComplete="off"
                >
                  <div className="d-flex">
                    {errors.firstname && touched.firstname ? (
                      <Input
                        label="Firstname"
                        id="firstname"
                        placeholder="Firstname"
                        type="text"
                        mainDivClass="me-2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        className="error-border"
                        inputError={errors.firstname}
                      />
                    ) : (
                      <Input
                        label="Firstname"
                        id="firstname"
                        placeholder="Firstname"
                        type="text"
                        mainDivClass="me-2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                      />
                    )}
                    {errors.lastname && touched.lastname ? (
                      <Input
                        label="Lastname"
                        id="lastname"
                        placeholder="Lastname"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        className="error-border"
                        inputError={errors.lastname}
                      />
                    ) : (
                      <Input
                        label="Lastname"
                        id="lastname"
                        placeholder="Lastname"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                      />
                    )}
                  </div>
                  {errors.username && touched.username ? (
                    <Input
                      label="Username"
                      id="username"
                      placeholder="Enter username"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      className="error-border"
                      inputError={errors.username}
                    />
                  ) : (
                    <Input
                      label="Username"
                      id="username"
                      placeholder="Enter username"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  )}
                  {errors.email && touched.email ? (
                    <Input
                      label="Email"
                      id="email"
                      placeholder="Enter email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="error-border"
                      inputError={errors.email}
                    />
                  ) : (
                    <Input
                      label="Email"
                      id="email"
                      placeholder="Enter email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  )}
                  {errors.birthday && touched.birthday ? (
                    <Input
                      label="Birthday"
                      id="birthday"
                      type="date"
                      placeholder="Enter Birthday"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.birthday}
                      className="error-border"
                      inputError={errors.birthday}
                    />
                  ) : (
                    <Input
                      label="Birthday"
                      id="birthday"
                      type="date"
                      placeholder="Enter Birthday"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.birthday}
                    />
                  )}
                  {errors.password && touched.password ? (
                    <Input
                      label="Password"
                      id="password"
                      placeholder="Enter password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="error-border"
                      inputError={errors.password}
                    />
                  ) : (
                    <Input
                      label="Password"
                      id="password"
                      placeholder="Enter password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  )}
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <Input
                      label="Confirm Password"
                      id="confirm-password"
                      placeholder="Enter confirm password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmpassword}
                      className="error-border"
                      inputError={errors.confirmpassword}
                      name="confirmpassword"
                    />
                  ) : (
                    <Input
                      label="Confirm Password"
                      id="confirm-password"
                      placeholder="Enter confirm password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmpassword}
                      name="confirmpassword"
                    />
                  )}

                  <div className="auth-container__gender">
                    <input
                      name="gender"
                      id="genderMale"
                      type="radio"
                      value="Male"
                      checked={values.gender === "Male"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="genderMale">Male</label>
                    <input
                      name="gender"
                      id="genderFemale"
                      type="radio"
                      value="Female"
                      checked={values.gender === "Female"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="genderMale">Female</label>
                  </div>
                  {errors.gender && touched.gender && (
                    <span className="gender-error">{errors.gender}</span>
                  )}
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    innerText="Register"
                  />
                </form>
              )}
              {/* Register Form - END */}
              <div className="login-link">
                Already Have An Account? <Link to="/">Login</Link>
              </div>
            </div>
          </div>
        </Col>
      </section>
      {/* Register Section - END */}
    </main>
  );
};

export default Register;
