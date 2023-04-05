import { useState } from "react";
import RegisterForm from "../Components/RegisterForm";

const Register = () => {
  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  console.log(formData);
  return <RegisterForm formData={formData} handleOnChange={handleOnChange} />;
};

export default Register;
