import { Button, Chip, Rating, Typography } from "@mui/material"
import PropTypes from "prop-types"

Item.propTypes = {
  item: PropTypes.object
}

function Item (props) {
  const {item} = props

  return (
    <div className='single-item-div'>

      <div>
        <img
          className='single-item-image'
          src="src/img/background.png"
          alt=""
        />
      </div>
      

      <div className='single-item-details'>
        <Typography variant='h4' color={"black"} >
          {item.name}
        </Typography>

        <Typography variant='subtitle2' color={"black"} >
          {item.owner.name}
        </Typography>

        <Typography variant='subtitle1' color={"black"} >
          TK {item.price}
        </Typography>

        <div className="rating">
          <Rating sx={{ marginRight: "10px" }} name="read-only" value={item.rating} readOnly />
          <Chip label="21 reviews" variant="outlined" />
        </div>



        <Typography variant='body2' color={"grey"} >
          {item.description}
        </Typography>

        <Button
          variant='contained'
          sx={{
            my: 3,
            color: 'white',
            textTransform: 'lowercase',
            borderRadius: "25px"
          }}
        >
          place Order
        </Button>
      </div>



    </div>
  )
}

export default Item