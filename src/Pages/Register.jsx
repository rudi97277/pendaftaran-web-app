import { useState } from "react";
import RegisterForm from "../components/organisms/register/RegisterForm";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenBackdrop((prevBackDrop) => !prevBackDrop);
    setTimeout(() => {
      setOpenBackdrop((prevBackDrop) => !prevBackDrop);
      navigate("/");
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
  };

  return (
    <Box
      sx={{
        maxWidth: "500px",
      }}
    >
      <RegisterForm
        openBackdrop={openBackdrop}
        formData={formData}
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default Register;
