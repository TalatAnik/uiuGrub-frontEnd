import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const LoginPaper = styled(Paper)(() => ({
  padding: 10,
  width: 500,
  minHeight: 300,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Signup() {
  const [name, setName] = useState("");
  const [id, setid] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [imageFileName, setImageFileName] = useState("avatar.jpg");
  // const [helperText, setHelperText] = useState('Invalid username or password!');

  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const openFileUploadWindow = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle file selection
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      // No file chosen, do nothing
      return;
    }

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      // Make an API call to upload the file
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Assume the response contains the file name in `response.data.fileName`
      // const fileName = response.data.fileName;
      console.log(file.name);
      // Update the image file name state
      setImageFileName(file.name);
    } catch (error) {
      console.error("Error uploading image:", error);
    }

    // Reset the file input after the file is processed
    event.target.value = "";
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIdChange = (e) => {
    setid(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:5000/users/create", {
          name: name,
          studentID: id,
          email: email,
          phone: phone,
          image: imageFileName,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          setError(false);
          localStorage.setItem("userId", name);
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userType", "customer");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    } catch (error) {
      console.error("Error making API call:", error);
    }
  };

  return (
    <>
      <Box
        sx={{
          p: 0,
          m: 0,
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('src/img/background.png')",
          backgroundSize: "cover",
        }}
      >
        <img
          src={"src/img/logo.png"}
          alt="Logo"
          style={{
            marginBottom: "20px",
            height: "40px",
            width: "240px",
          }}
        />

        <LoginPaper elevation={3}>
          <Typography
            variant="h6"
            sx={{
              marginY: "20px",
              color: "primary.main",
            }}
          >
            Student Sign Up
          </Typography>

          <img
            className="profile-pic"
            crossOrigin="anonymous"
            src={`http://localhost:5000/upload/${imageFileName}`}
            alt="User Avatar"
          />

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{
              color: "white",
            }}
          >
            Upload profile picture
            <VisuallyHiddenInput onClick={openFileUploadWindow} />
          </Button>

          <TextField
            required
            label="Name"
            sx={{
              width: "300px",
              my: 1,
            }}
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            required
            label="Student ID"
            sx={{
              width: "300px",
              my: 1,
            }}
            value={id}
            onChange={handleIdChange}
          />

          <TextField
            required
            label="Phone number"
            sx={{
              width: "300px",
              my: 1,
            }}
            value={phone}
            onChange={handlePhoneChange}
          />

          <TextField
            required
            label="email"
            type="email"
            sx={{
              width: "300px",
              my: 1,
            }}
            value={email}
            onChange={handleEmailChange}
          />

          <TextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            sx={{
              width: "300px",
              my: 1,
            }}
            value={password}
            onChange={handlePasswordChange}
          />

          <FormHelperText>
            {error ? "Invalid Student ID and Password" : ""}
          </FormHelperText>

          <Button
            sx={{
              color: "white",
              my: 1
            }}
            variant="contained"
            
            onClick={handleSumbit}
          >
            Login
          </Button>
        </LoginPaper>
      </Box>
    </>
  );
}

export default Signup;
