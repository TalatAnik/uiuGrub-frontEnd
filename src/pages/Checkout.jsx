import { Box, Typography, Container, List, Button } from "@mui/material"
import Menu from '../components/Menu'
import '../App.css'
import { useEffect, useState } from 'react'
import axios from "axios"
import Item from "../components/Item"





function Checkout () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [cartProducts, setCartProducts] = useState([])
  // const [items, setItems] = useState([])
  // const [restName, setRestName] = useState('')

  const fetchProductDetails = async (productIds) => {
    const productDetails = []

    for (const productId of productIds) {
      try {
        // Make an API call to fetch product details
        const response = await axios.get(
          `http://localhost:5000/items/${productId}`
        );
        // Store the product details
        productDetails.push(response.data)
      } catch (error) {
        console.error(
          `Error fetching product details for ID ${productId}:`,
          error
        );
      }
    }

    // Update the state with the list of product details
    setCartProducts(productDetails)
    console.log(productDetails)
  }

  const calculateTotalValue = () => {
    return cartProducts.reduce((total, product) => {
      // Multiply product price by quantity (assuming quantity is tracked in the product object)
      // If you're not tracking quantity, you can remove it from the calculation
      return total + product.item.price * (product.quantity || 1)
    }, 0)
  }

  // Load the cart from local storage and fetch product details on page load
  useEffect(() => {
    // Retrieve the cart from local storage
    const cart = localStorage.getItem("cart")
    const productIds = cart ? JSON.parse(cart) : []
    // console.log(productIds)
    // Fetch the product details for each product ID in the cart
    fetchProductDetails(productIds)
  }, [])

  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn")
    if (logged === "true") setLoggedIn(true)
  }, [])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#ffffff",
      }}
    >
      <Menu isLoggedIn={loggedIn}></Menu>

      <Box className="featured-restaurant">
        <Container>
          <Typography
            variant="h4"
            sx={{
              height: "150px",
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlign: "left",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            Your Cart
          </Typography>
        </Container>
      </Box>

      <Box>
        <Container>
          {cartProducts.map((item, index) => (
            <div key={index} className="checkout-item-div">
              <Typography
                variant="h4"
                color={"black"}
                mx={4}
                width={"400px"}
                textAlign={"left"}
              >
                {item.item.name}
              </Typography>

              <Typography variant="body2" color={"grey"} mx={4} width={"400px"}>
                {item.item.description}
              </Typography>

              <Typography
                variant="subtitle1"
                color={"black"}
                mx={4}
                textAlign={"right"}
                width={"200px"}
              >
                TK {item.item.price}
              </Typography>
            </div>
          ))}
        </Container>
      </Box>

      <Typography
        variant="h6"
        color={"black"}
        mx={4}
        textAlign={"center"}
      >
        Total value of the cart: ${calculateTotalValue().toFixed(2)}
      </Typography>

      <Button variant="contained" sx={{ margin: "30px 20px", color: "white" }}>
        Checkout
      </Button>
      <Button
        variant="contained"
        sx={{ margin: "30px 20px", backgroundColor: "red", color: "white" }}
      >
        Cancel
      </Button>
    </Box>
  );
}


export default Checkout