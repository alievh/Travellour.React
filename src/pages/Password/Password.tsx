import { useState, useEffect, useCallback, FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Col from "../../components/Bootstrap/Col";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { logout } from "../../store/Auth/AuthSlice";
import { clearUserData } from "../../store/User/UserData";
import { baseUrl } from "../../store/Fetch/FetchConfiguration";

const Password = () => {
  const oldPassword = useRef<HTMLInputElement>(null);
  const newPassword = useRef<HTMLInputElement>(null);
  const newPasswordAgain = useRef<HTMLInputElement>(null);

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    userName: "",
    profileImage: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const changePassword = async (event: FormEvent) => {
    event.preventDefault();

    const passwordData = {
      oldPassword: oldPassword.current?.value,
      newPassword: newPassword.current?.value,
      newPasswordAgain: newPasswordAgain.current?.value,
    };

    setLoading(true);
    const response = await fetch(`${baseUrl}/user/changepassword`, {
      method: "POST",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        logoutHandler();
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });
  };

  const userData = useCallback(async () => {
    console.log(JSON.parse(localStorage.getItem("user") || "{}").user.id);
    const userInformation = await fetch(
      `${baseUrl}/user/${
        JSON.parse(localStorage.getItem("user") || "{}").user.id
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user") || "{}").token
          }`,
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          setError(data.error.message.toString());
        });
      }
    });

    setUser(userInformation);
  }, []);

  useEffect(() => {
    userData();
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearUserData());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    // Password Section - START
    <section
      className={`password-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col lg="12">
            {/* User Information - START */}
            <div className="setting-section__user">
              <div className="user-info">
                <div className="user-avatar">
                  <img
                    src={`https://localhost:7101/img/${user.profileImage}`}
                    alt="User Avatar"
                  />
                </div>
                <div className="user-fullname">
                  <h5>
                    {user.firstname} {user.lastname}
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
                    <Button
                      type="button"
                      buttonIcon="fa-solid fa-arrow-right-from-bracket"
                      onClick={logoutHandler}
                      className="btn"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* User Information - END */}
            {/* Password User Input - START */}
            <div className="password-section__user-input">
              <h4>Password Change</h4>
              <form onSubmit={changePassword}>
                <Input
                  type="password"
                  id="current-password"
                  placeholder="Current Password"
                  label="Type your current password"
                  mainDivClass="password-change"
                  ref={oldPassword}
                />
                <Input
                  type="password"
                  id="new-password"
                  placeholder="New Password"
                  label="Type your new password"
                  mainDivClass="password-change"
                  ref={newPassword}
                />
                <Input
                  type="password"
                  id="again-new-password"
                  placeholder="Retype password"
                  label="Retype your new password"
                  mainDivClass="password-change"
                  ref={newPasswordAgain}
                />
                <Button
                  type="submit"
                  className="btn btn-primary"
                  innerText="Change Password"
                />
              </form>
            </div>
            {/* Password User Input - END */}
          </Col>
        </Row>
      </Container>
    </section>
    // Password Section - END
  );
};

export default Password;
