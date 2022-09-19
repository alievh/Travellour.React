import { useRef, useState } from "react";
import AuthPoster from "../../components/AuthPoster/AuthPoster";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Col from "../../components/Bootstrap/Col";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const birthday = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  async function addUserHandler(event: React.FormEvent) {
    event.preventDefault();

    const user = {
      firstName: firstName.current?.value,
      lastName: lastName.current?.value,
      userName: userName.current?.value,
      email: email.current?.value,
      password: password.current?.value,
      confirmPassword: confirmPassword.current?.value,
      birthday: birthday.current?.value,
    };
    
    setLoading(true);
    const response = await fetch(
      "https://localhost:7065/api/authentication/register",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setLoading(false);
      if (res.ok) {
        navigate('/');
        return res.json();
      } else {
        return res.json().then((data) => {
          setErrorMessage(data.error.message.toString());
        });
      }
    });
  }

  

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
                {loading && <p>Loading...</p>}
                {errorMessage !== null ? <p>{errorMessage}</p> : ""}
              </div>
              {/* Register Form - START */}
              <form onSubmit={addUserHandler} className="auth-container__form">
                <div className="d-flex">
                  <Input
                    label="Firstname"
                    id="firstname"
                    placeholder="Firstname"
                    type="text"
                    mainDivClass="me-2"
                    ref={firstName}
                  />
                  <Input
                    label="Lastname"
                    id="lastname"
                    placeholder="Lastname"
                    type="text"
                    ref={lastName}
                  />
                </div>
                <Input
                  label="Username"
                  id="username"
                  placeholder="Enter username"
                  type="text"
                  ref={userName}
                />
                <Input
                  label="Email"
                  id="email"
                  placeholder="Enter email"
                  type="email"
                  ref={email}
                />
                <Input
                  label="Birthday"
                  id="birthday"
                  type="date"
                  placeholder="Enter Birthday"
                  ref={birthday}
                />
                <Input
                  label="Password"
                  id="password"
                  placeholder="Enter password"
                  type="password"
                  ref={password}
                />
                <Input
                  label="Confirm Password"
                  id="confirm-password"
                  placeholder="Enter confirm password"
                  type="password"
                  ref={password}
                />
                <div className="auth-container__gender">
                  <input name="gender" id="genderMale" type="radio" value="0" />
                  <label htmlFor="genderMale">Male</label>
                  <input
                    name="gender"
                    id="genderFemale"
                    type="radio"
                    value="1"
                  />
                  <label htmlFor="genderMale">Female</label>
                </div>
                <Button
                  type="submit"
                  className="btn btn-primary"
                  innerText="Register"
                />
              </form>
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
