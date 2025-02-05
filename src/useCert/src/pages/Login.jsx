// /Users/jay/Final/src/useCert/src/pages/Login.jsx
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterLink from "../components/RegisterLink.jsx";

const Login = () => {
  return (
    <div>
      <Header />
      <Form route="/api/token/" method="login" />
      <RegisterLink />
      {/* <Footer /> */}
    </div>
  );
};
export default Login;
