import { useState } from "react";
import RegisterForm from "../components/organisms/register/RegisterForm";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [info, setInfo] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenBackdrop((prevBackDrop) => !prevBackDrop);
    setTimeout(() => {
      formData.password !== formData.confirmPassword && setInfo('Password berbeda')
      setOpenBackdrop((prevBackDrop) => !prevBackDrop);
    }, 2000);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    setInfo('');
  };

  return (
    <Box>
      <RegisterForm
        openBackdrop={openBackdrop}
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        info={info}
      />
    </Box>
  );
};

export default Register;
