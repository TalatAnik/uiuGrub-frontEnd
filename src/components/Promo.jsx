import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import PropTypes from "prop-types"


Promo.propTypes = {
  items: PropTypes.array
}

function Promo(props) {
  const {items} = props
  const promoItems = items.slice(0, 4)


  return (
    <Stack direction="row" spacing={6} sx={{ py: 2 }}>

      {promoItems.map((item)=>{
        return (


          <Card elevation={0} sx={{ minWidth: 240, maxWidth: 345, backgroundColor: "#ffffff00" }} key={item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="src/img/background.png"
                alt="green iguana"
                sx={{
                  borderRadius: "10px"
                }}
              />
              <CardContent
                sx={{
                  color: "white"

                }
                }>
                <Typography gutterBottom variant="h5" sx={{ textAlign: "left", textShadow: "1px 1px 1px black"}}>
                  {item.name}
                </Typography>

                <Typography gutterBottom variant="subtitle1" sx={{ textAlign: "left", textShadow: "1px 1px 1px black" }}>
                  {item.owner.name}
                </Typography>


              </CardContent>
            </CardActionArea>

          </Card>


        )
      })}

      



    </Stack>
  )
}

export default Promo