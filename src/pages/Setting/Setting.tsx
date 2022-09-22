import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Col from "../../components/Bootstrap/Col";
import { useRef, useState } from "react";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const Setting = () => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const userName = useRef<HTMLInputElement>(null);

  const [errorMessage, setErrorMessage] = useState();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const userData = useSelector((state: any) => state.UserData.user);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const changeInformation = {
      firstName: firstName.current?.value,
      lastName: lastName.current?.value,
      userName: userName.current?.value
    }

    console.log(changeInformation)

    const response = await fetch(
      `${baseUrl}/user/userupdate`,
      {
        method: "POST",
        body: JSON.stringify(changeInformation),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setErrorMessage(data.error.message.toString());
        });
      }
    });
  }

  return (
    // Setting Section - START
    <section
      className={`setting-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col lg="12">
            {/* User Information - START */}
            <div className="setting-section__user">
              <div className="user-info">
                <div className="user-avatar">
                  <img
                    src={`https://localhost:7101/img/${userData.profileImage}`}
                    alt="User Avatar"
                  />
                </div>
                <div className="user-fullname">
                  <h5>
                    {userData.firstname} {userData.lastname}
                  </h5>
                  <span>Member since 2022</span>
                </div>
              </div>
              <div className="user-logout">
                <ul>
                  <li>
                    <Link to="/newsfeed">
                      <i className="fa-solid fa-house-user"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* User Information - END */}
            <div className="setting-section__personal-info">
              <h4>Personal Information</h4>
              {/* Setting Form - START */}
              <form onSubmit={submitHandler}>
                <div className="form-fullname">
                  <Col lg="5">
                    <Input
                      type="text"
                      id="firstname"
                      placeholder="Firstname"
                      label="Type Firstname"
                      mainDivClass="form-firstname"
                      ref={firstName}
                    />
                  </Col>
                  <Col lg="5">
                    <Input
                      type="text"
                      id="lastname"
                      placeholder="Lastname"
                      label="Type Lastname"
                      mainDivClass="form-lastname"
                      ref={lastName}
                    />
                  </Col>
                </div>

                <div className="form-username">
                  <Col lg="10">
                    <Input
                      type="text"
                      id="username"
                      placeholder="Username"
                      label="Type Username"
                      ref={userName}
                    />
                  </Col>
                </div>
                <Button
                  type="submit"
                  innerText="Save Changes"
                  className="btn"
                />
              </form>
              {/* Setting Form - END */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    // Setting Section - END
  );
};

export default Setting;
