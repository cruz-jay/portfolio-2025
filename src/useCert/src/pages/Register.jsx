import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <>
      <Header />
      <Form route="/api/user/register/" method="register" />
      {/* <Footer /> */}
    </>
  );
};

export default Register;
