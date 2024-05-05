import { Badge, Button, Container, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material'
import { useState, useEffect } from "react"
import PropTypes from "prop-types"

Menu.prototype = {
  isLoggedIn: PropTypes.bool.isRequired
}

const clearStorage = () => {
  localStorage.removeItem('isLoggedIn')
}

// eslint-disable-next-line react/prop-types
function Menu({isLoggedIn}) {
  const [cartCount, setCartCount] = useState(0)
  const navigate = useNavigate()

  

  // useEffect to listen for changes to the cart in local storage
  useEffect(() => {
    const loadCartCount = () => {
      const cart = localStorage.getItem("cart")
      const cartArray = cart ? JSON.parse(cart) : []
      setCartCount(cartArray.length)
    }

    loadCartCount()
  }, [])




  return (
    <div className="menu">
      <Container>
        <div className="menuHolder">
          <div className="menuLeft">
            <a href="/">
              <img src="../src/img/bars.png" alt="logo" className="menubars" />
            </a>
            <img src="../src/img/logo.png" alt="logo" className="logoImg" />
          </div>

          <div className="menuRight">
            <Stack direction="row" spacing={2}>
              <div className="cart-icon">
                <Badge
                  color="primary"
                  badgeContent={cartCount}
                  sx={{ margin: "auto !important" }}
                  max={99}
                  onClick={ () => {
                    navigate("/checkout")
                  }}
                >
                  <ShoppingCart />
                </Badge>
              </div>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
                disableElevation
                onClick={() => {
                  clearStorage()
                  navigate("/login")
                }}
              >
                {isLoggedIn ? "Log Out" : "Log In"}
              </Button>

              {isLoggedIn ? (
                ""
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "primary.main",
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    fontWeight: "600",
                  }}
                >
                  Sign Up
                </Button>
              )}
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Menu