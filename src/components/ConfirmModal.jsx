import PropTypes from "prop-types"
import Modal from "@mui/material/Modal"

ConfirmationModal.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

function ConfirmationModal (props) {
  const { onConfirm, onCancel } = props


  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Confirm Add to Cart</h3>
        <p>Do you want to add this product to your cart?</p>
        <div className="modal-buttons">
          {/* Confirm button */}
          <button onClick={onConfirm}>Confirm</button>
          {/* Cancel button */}
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
