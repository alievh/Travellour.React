import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Col from "../../components/Bootstrap/Col";
import Container from "../../components/Bootstrap/Container";
import Row from "../../components/Bootstrap/Row";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";

const Password = () => {
    const sidebarIsActive = useSelector((state:any) => state.sidebarToggle.isActive);

  return (
    <section
      className={`password-section ${!sidebarIsActive && "sidebar-notactive"}`}
    >
      <Container>
        <Row>
          <Col lg="12">
            <div className="setting-section__user">
              <div className="user-info">
                <div className="user-avatar">
                  <img src="https://wordpress.iqonic.design/product/wp/socialv/wp-content/uploads/avatars/33/1656654204-bpfull.jpg" />
                </div>
                <div className="user-fullname">
                  <h5>Marvin McKinney</h5>
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
            <div className="password-section__user-input">
              <h4>Password Change</h4>
              <form>
                <Input type="password" id="current-password" placeholder="Current Password" label="Type your current password" mainDivClass="password-change" />
                <Input type="password" id="new-password" placeholder="New Password" label="Type your new password" mainDivClass="password-change" />
                <Input type="password" id="again-new-password" placeholder="Retype password" label="Retype your new password" mainDivClass="password-change" />
                <Button type="submit" className="btn btn-primary" innerText="Change Password" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Password;
