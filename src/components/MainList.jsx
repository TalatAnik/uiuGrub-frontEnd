import { Stack } from "@mui/material"
import Item from "./Item"
import PropTypes from "prop-types"

MainList.propTypes = {
  items: PropTypes.array
}



function MainList(props) {
  const {items} =props

  return (
    <Stack direction="column" spacing={1} >

      {items.map((item)=>{
        console.log(item.id)
        return(
          <Item key={item.index} item={item}></Item>
        )
        
      })}
      

      

    </Stack>
  )
}

export default MainList