import { Box, Button, FormHelperText, TextField } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const LoginPaper = styled(Paper)(() => ({
  padding: 10,
  width: 500,
  height: 300,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));



function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  // const [helperText, setHelperText] = useState('Invalid username or password!');

   const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }


  const handleSumbit = async (e) => {
    e.preventDefault()

    try {

      axios.post('http://localhost:5000/users/login', {
        studentID: name,
        password: password,
      })
      .then( response => {        
        console.log(response.data)
        setError(false)
        localStorage.setItem('userId', name)
        localStorage.setItem('isLoggedIn', 'true')
        navigate("/")
      })
      .catch(error => {
        console.log(error)
        setError(true)
      })

    }
    catch (error) {
      console.error('Error making API call:', error)
    }
  }

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
        backgroundSize: "cover"
      }}
    >
      <img 
        src={'src/img/logo.png'} 
        alt="Logo" 
        style={{
          marginBottom: "20px",
          height: "40px",
          width: "240px"
        }}
      />

      <LoginPaper 
        elevation={3} 
      >
        <TextField
          required
          id="outlined-input"
          label="Student ID"
          defaultValue=""
          sx={{
            width: "300px",
            my: 1
          }}
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{
            width: "300px",
            my: 1
          }}
          value={password}
          onChange={handlePasswordChange}
        />

        
          <FormHelperText>
            {error ? 'Invalid Student ID and Password' : ''}
          </FormHelperText>
        
        
        <Button variant="contained" sx={{ my: 1 }} onClick={handleSumbit}>Login</Button>
      </LoginPaper>
      
    </Box>      
    </>
  )
}

export default Login
