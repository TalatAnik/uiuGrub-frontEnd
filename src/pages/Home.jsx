import { Box, Button,  Container, Stack, TextField, Typography } from '@mui/material'
import Menu from '../components/Menu'
import Promo from '../components/Promo'
import MainList from '../components/MainList'
import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'







function Home () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [items, setItems] = useState([])

  

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn')
      if(logged === 'true') setLoggedIn(true)
    // const userId = localStorage.getItem('userId')
  }, [])

  const fetchItems = async () => {
    try {
      axios.get('http://localhost:5000/items/all')
        .then( response =>
          setItems(response.data)
      )
      .catch(error => {
        console.log(error)
      })
    }
    catch (error) {
      console.error('Error making API call:', error)
    }
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#ffffff"
      }}
    >
      
      <Menu isLoggedIn={loggedIn} ></Menu>
      
      <Box className="feature">
        <Container 
          className='cta-div'
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <Stack direction="row" spacing={3}>
            <TextField
              id="outlined-search"
              label="What are you craving for today?"
              type="search"
              sx={{
                backgroundColor: "#ffffff99",
                width: "600px",
                color: "#aaaa"
              }}
            />

            <Button
              variant="contained"
              sx={{
                color: "#fff",
                textTransform: "capitalize",
                borderRadius: "25px",
                fontSize: "1.1rem",
                width: "130px"
              }}
            >
              Search
            </Button>
          </Stack>
            
            
          <div>
            <Typography 
              variant='h4' 
              sx={{ 
                color: "black", 
                textAlign: 'left',
                my: "20px",
                marginTop: 12
              }}
            >
              Our Top Picks For Today
            </Typography>
          
            <Promo items = {items}></Promo>
          </div>
          
          
          
          
        </Container>
        
      </Box>
      
      <Box >
        <Container>
          <MainList items={items}></MainList>
        </Container>
      </Box>

      
      

    </Box>

    
      
    
  )
}


export default Home