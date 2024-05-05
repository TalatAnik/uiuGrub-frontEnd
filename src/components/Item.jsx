import { Button, Chip, Rating, Typography, Box, Modal } from "@mui/material";
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useState } from "react"



Item.propTypes = {
  item: PropTypes.object,
  owner: PropTypes.string,
};

function Item(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { item } = props;

  const openModal = () => {
    setIsModalOpen(true)
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  };

  // Function to confirm adding the product to the cart
  const confirmAddToCart = () => {
    // Retrieve the existing cart from local storage
    let cart = localStorage.getItem("cart")
    cart = cart ? JSON.parse(cart) : []

    // Add the product ID to the cart array
    cart.push(item.id);
    // Save the updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart))

    // Close the modal
    closeModal()
    window.location.reload()
  }




  return (
    <div className="single-item-div">
      <div>
        <img
          className="single-item-image"
          src="../src/img/background.png"
          alt=""
        />
      </div>

      <div className="single-item-details">
        <Typography variant="h4" color={"black"}>
          {item.name}
        </Typography>

        {item.owner.name == null ? (
          ""
        ) : (
          <Typography variant="subtitle2" color={"black"}>
            <Link to={"/restaurant/" + item.owner.id}>{item.owner.name}</Link>
          </Typography>
        )}

        <Typography variant="subtitle1" color={"black"}>
          TK {item.price}
        </Typography>

        <div className="rating">
          <Rating
            sx={{ marginRight: "10px" }}
            name="read-only"
            value={item.rating}
            readOnly
          />
          <Chip label="21 reviews" variant="outlined" />
        </div>

        <Typography variant="body2" color={"grey"}>
          {item.description}
        </Typography>

        <Button
          variant="contained"
          sx={{
            my: 3,
            color: "white",
            textTransform: "lowercase",
            borderRadius: "25px",
          }}
          onClick={() => openModal()}
        >
          place Order
        </Button>
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "300px",
            padding: "50px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#ffff",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            textAlign={"center"}
            color={"grey"}
          >
            Product: {item.name}
          </Typography>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={"center"}
            color={"grey"}
          >
            Price: Tk {item.price}
          </Typography>

          <Button variant="contained" onClick={confirmAddToCart}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Item
