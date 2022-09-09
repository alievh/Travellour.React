import AuthPoster from "../../components/AuthPoster/AuthPoster";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Col from "../../components/Bootstrap/Col";

const Login = () => {
  return (
    <main>
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
              </div>
              <form className="auth-container__form">
                <Input
                  label="Username"
                  id="username"
                  placeholder="Enter username"
                  type="text"
                />
                <Input
                  label="Password"
                  id="password"
                  placeholder="Enter password"
                  type="password"
                />
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
              <div className="register-link">
                Don't Have An Account? <a href="/register">Sign Up</a>
              </div>
            </div>
          </div>
        </Col>
      </section>
    </main>
  );
};

export default Login;
