import { Badge, Button, Container, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material'
import PropTypes from "prop-types"

Menu.prototype = {
  isLoggedIn: PropTypes.bool.isRequired
}

const clearStorage = () => {
  localStorage.removeItem('isLoggedIn');
}

// eslint-disable-next-line react/prop-types
function Menu({isLoggedIn}) {
  const navigate = useNavigate()
  
  
  return (
    <div className='menu'>
      <Container>
        <div className="menuHolder">
          <div className='menuLeft'>
            <a href="/"><img src="src/img/bars.png" alt="logo" className='menubars' /></a>
            <img src="src/img/logo.png" alt="logo" className='logoImg' />
          </div>

          <div className="menuRight">
            <Stack direction="row" spacing={2}>

              <div className='cart-icon'>
                <Badge color="primary" badgeContent={11} sx={{ margin: "auto !important" }} max={10}>
                  <ShoppingCart />
                </Badge>
              </div>
              


              <Button
                variant="contained"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "20px",
                  textTransform: 'capitalize',
                  fontWeight: "600"
                }}
                disableElevation
                onClick={() => {
                  clearStorage()
                  navigate('/login')
                }}
              >
                {isLoggedIn ? "Log Out":"Log In"}
              </Button>

              {isLoggedIn ? "" : 
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "primary.main",
                  borderRadius: "20px",
                  textTransform: 'capitalize',
                  fontWeight: "600"
                }}

              >
                Sign Up
              </Button>}

              
              
            </Stack>
            
          </div>
        </div>

      </Container>

    </div>    
  )
}

export default Menu