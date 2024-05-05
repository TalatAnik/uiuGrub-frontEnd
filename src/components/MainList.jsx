import { Stack } from "@mui/material"
import Item from "./Item"
import PropTypes from "prop-types"

MainList.propTypes = {
  items: PropTypes.array
}



function MainList(props) {

  return (
    <Stack direction="column" spacing={1} >

      {props.items.map((item)=>{
        
        return(
          <Item key={item.id} item={item}></Item>
        )
        
      })}
      

      

    </Stack>
  )
}




export default MainList