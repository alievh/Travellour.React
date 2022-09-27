import Col from "../Bootstrap/Col";

const AuthPoster = () => {
  return (
    <Col className="auth-poster" lg="6">
      <img src={require("../../assets/images/login-register.jpg")} />
    </Col>
  );
};

export default AuthPoster;
