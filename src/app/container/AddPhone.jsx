import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import './AddPhone.css';
import PhoneInput from "react-phone-input-2";
const style = {
  position: "absolute",
  color: "black",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};


const AddPhone = ({ open, setOpen, data }) => {
  const handleClose = () => setOpen(false);

 
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       
          <div className="logo">
            <p>Use 'FLASH25' for 25% OFF on your order!</p>
          </div>
          <div className="coupon-content">
            <input className="coupon-input" placeholder="Order Summary" />
            </div>
          <div className="coupon-content">
            <input className="coupon-input" placeholder="Enter coupon code" />
            </div>
            <div className="coupon-content">
                        <PhoneInput
                            containerClass="phone phone-input-container"
                            country={"in"}
                            onlyCountries={["in"]}
                            disableDropdown={false}
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div className="add">
                      <button  className="btn">Add Address</button>
                    </div>
                    <div className="check">
                  <input type="checkbox" name="gender" value="male" />
       <p>Keep me Posted about sales and offers</p>
   </div>
   {/* <div className="feedback">
    <div className="review">
    <i class="fa-regular fa-star"></i>
    <p>2 Year Warranty</p>
    </div>
    <div className="review">
    <i class="fa-regular fa-face-smile"></i>
    <p>4.9/5 Rating by 10,000+ Customers</p>
    </div>
    <div className="review">
    <i class="fa-solid fa-truck-fast"></i>
    <p>Express Shipping</p>
    </div>
    <div className="review">
    <i class="fa-solid fa-lock"></i>
    <p>100% Secure Payments</p>
    </div>
   </div> */}
   
   <div className="privacy">
   <p>By proceeding, I accept the <b>T&C</b> and <b>Privacy Policy</b></p>
   <div className="secure">
   <i class="fa-solid fa-lock"></i>
   <p>shopflo-logo</p>
   </div>
   </div>
        </Box>
      </Modal>
     
    </div>
  );
};

export default AddPhone;