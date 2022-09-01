import React from "react";
import AuthPoster from "../../components/AuthPoster/AuthPoster";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const Register = () => {
  return (
    <main>
      <section className="register-section">
        <AuthPoster />
        <div className="col-lg-6 col-sm-12">
          <div className="register-section__auth">
            <div className="auth-container">
              <div className="auth-container__title">
                <h4>Travellour</h4>
                <p>
                  Welcome to Travellour, a platform to connect with the social
                  world
                </p>
              </div>
              <form className="auth-container__form">
                <div className="d-flex">
                  <Input
                    label="Firstname"
                    id="firstname"
                    placeholder="Firstname"
                    type="text"
                    mainDivClass="me-2"
                  />
                  <Input
                    label="Lastname"
                    id="lastname"
                    placeholder="Lastname"
                    type="text"
                  />
                </div>
                <Input
                  label="Username"
                  id="username"
                  placeholder="Enter username"
                  type="text"
                />
                <Input
                  label="Email"
                  id="email"
                  placeholder="Enter email"
                  type="email"
                />
                <Input
                  label="Password"
                  id="password"
                  placeholder="Enter password"
                  type="password"
                />
                <Button
                  type="submit"
                  className="btn btn-primary"
                  innerText="Register"
                />
              </form>
              <div className="login-link">
                Already Have An Account? <a href="/">Login</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
