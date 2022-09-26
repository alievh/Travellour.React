import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Col from "../../components/Bootstrap/Col";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { logout } from "../../store/Auth/AuthSlice";
import { clearUserData } from "../../store/User/UserData";


const Password = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sidebarIsActive = useSelector(
    (state: any) => state.sidebarToggle.isActive
  );

  const userData = useSelector((state: any) => state.UserData.user);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearUserData());
    localStorage.removeItem("user")
    navigate("/");
  }

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
                  <img src={`https://localhost:7101/img/${userData.profileImage}`} alt="User Avatar" />
                </div>
                <div className="user-fullname">
                  <h5>{userData.firstname} {userData.lastname}</h5>
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
                    <Button type="button" buttonIcon="fa-solid fa-arrow-right-from-bracket" onClick={logoutHandler} className="btn" />
                  </li>
                </ul>
              </div>
            </div>
            {/* User Information - END */}
            {/* Password User Input - START */}
            <div className="password-section__user-input">
              <h4>Password Change</h4>
              <form>
                <Input
                  type="password"
                  id="current-password"
                  placeholder="Current Password"
                  label="Type your current password"
                  mainDivClass="password-change"
                />
                <Input
                  type="password"
                  id="new-password"
                  placeholder="New Password"
                  label="Type your new password"
                  mainDivClass="password-change"
                />
                <Input
                  type="password"
                  id="again-new-password"
                  placeholder="Retype password"
                  label="Retype your new password"
                  mainDivClass="password-change"
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
