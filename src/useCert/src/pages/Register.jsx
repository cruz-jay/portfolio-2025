import Form from "../components/Form";
import Header from "../components/Header";

const Register = () => {
  return (
    <>
      <Header />
      <Form route="/api/user/register/" method="register" />
    </>
  );
};

export default Register;
