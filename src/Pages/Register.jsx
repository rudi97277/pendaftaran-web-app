import { useState } from "react";
import RegisterForm from "../Components/RegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenBackdrop(prevBackDrop => !prevBackDrop)
    setTimeout(() => {
      setOpenBackdrop(prevBackDrop => !prevBackDrop)
      navigate('/');
    }, 2000);
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return <RegisterForm openBackdrop={openBackdrop} formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />;
};

export default Register;
