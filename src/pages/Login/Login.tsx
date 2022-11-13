import React, { useState } from "react";
import AuthPoster from "../../components/AuthPoster/AuthPoster";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Col from "../../components/Bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";
import { login } from "../../store/Auth/AuthSlice";
import { GetUserData } from "../../store/User/UserData";
import Loading from "../../components/Loading/Loading";
import { useFormik, FormikProps } from "formik";
import { loginValidator } from "../../schemas/loginValidator";

interface FormikModel {
  username: string;
  password: string;
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  }: FormikProps<FormikModel> = useFormik<FormikModel>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidator,
    async onSubmit() {
      setIsLoading(true);

      const user = {
        userName: values.username,
        password: values.password,
      };

      const loggedUser = await fetch(`${baseUrl}/authenticate/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            setError(data.title.toString());
          });
        }
      });

      dispatch(login(loggedUser));

      localStorage.setItem("user", JSON.stringify(loggedUser));
      setIsLoading(true);

      GetUserData(dispatch);

      navigate("/newsfeed");
    },
  });

  return (
    <main>
      {/* Login Section - START */}
      <section className="login-section">
        <AuthPoster />
        <Col lg="6" sm="12">
          <div className="login-section__auth">
            <div className="auth-container">
              <div className="auth-container__title">
                <h4>Travellour</h4>
                <p>
                  Welcome to Travellour, a platform to connect with the social
                  world
                </p>
                {isLoading && <Loading />}
                {error && <p className="login-error">{error}</p>}
              </div>
              {/* Login Form - START */}
              {!isLoading && (
                <form onSubmit={handleSubmit} className="auth-container__form">
                  {errors.username && touched.username ? (
                    <Input
                      label="Username"
                      id="username"
                      placeholder="Enter username"
                      type="text"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputError={errors.username}
                      className="error-border"
                    />
                  ) : (
                    <Input
                      label="Username"
                      id="username"
                      placeholder="Enter username"
                      type="text"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}

                  {errors.password && touched.password ? (
                    <Input
                      label="Password"
                      id="password"
                      placeholder="Enter password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputError={errors.password}
                      className="error-border"
                    />
                  ) : (
                    <Input
                      label="Password"
                      id="password"
                      placeholder="Enter password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  )}
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    innerText="Sign in"
                  />
                </form>
              )}
              <div className="register-link">
                Don't Have An Account? <Link to="/register">Sign Up</Link>
              </div>
              {/* Login Form - END */}
            </div>
          </div>
        </Col>
      </section>
      {/* Login Section - END */}
    </main>
  );
};

export default Login;
