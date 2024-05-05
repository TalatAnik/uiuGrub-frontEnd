import { Box, Typography, Container } from '@mui/material'
import Menu from '../components/Menu'
import MainList from '../components/MainList'
import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'







function Restaurant () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [items, setItems] = useState([])
  // const [restName, setRestName] = useState('')

  const {id} = useParams()



  useEffect(() => {
    const logged = localStorage.getItem("isLoggedIn")
    if (logged === "true") {      
      setLoggedIn(true)
    }
  }, [])


  useEffect(()=>{

    const fetchItems = async () => {
      try {
        axios
          .get(`http://localhost:5000/items/shop/${id}`)
          .then((response) => {
            // console.log(response.data.name, id)
            setItems(response.data.items)
          })
          .catch((error) => {
            console.log(error)
          });
      } catch (error) {
        console.error("Error making API call:", error)
      }
    }

    fetchItems()

  },[id])

  



  

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#ffffff"
      }}
    >
      
      <Menu isLoggedIn={loggedIn} ></Menu>
      
      <Box className="featured-restaurant">
        <Container>
          <Typography 
              variant='h4' 
              sx={{ 
                height: "150px",
                display: 'flex',
                flexDirection: 'column',
                color: "white", 
                textAlign: 'left',
                justifyContent: 'center',
                alignItems: 'left'
              }}
            >
              {items.length == 0? "" :
                items[0].owner.name
              }
              
            </Typography>
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


export default Restaurant