import React, { useState } from "react";
import Box from "@mui/material/Box";
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

const addressStyle = {
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
  const [showAddressBox, setShowAddressBox] = useState(false);
  const handleClose = () => setOpen(false);
  const handleAddressClose = () => setShowAddressBox(false);

  const handleAddAddress = () => {
    setShowAddressBox(true);
  };
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

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
            <button onClick={handleAddAddress} className="btn">
              Add Address
            </button>
          </div>
          <div className="check">
            <input type="checkbox" name="sales-offers" value="yes" />
            <p>Keep me Posted about sales and offers</p>
          </div>
          <div className="privacy">
            <p>
              By proceeding, I accept the <b>T&C</b> and <b>Privacy Policy</b>
            </p>
            <div className="secure">
              <i className="fa-solid fa-lock"></i>
              <p>shopflo-logo</p>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={showAddressBox}
        onClose={handleAddressClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={addressStyle}>
          <div className="address-box">
            <h2>Add Your Address</h2>
            <div className="form">
            <input
              className="address-input"
              placeholder="Full Name"
            />
            <input
              className="address-input"
              placeholder="Email"
            />
            </div>
            <div className="form">
            <label>Address  <span>*</span></label>
            <input
              className="address-input"
              placeholder="House No, Building, Road, Area,"
            />
            <input
              className="address-input"
              placeholder="Pincode"
            />
            </div>
            <div className="city">
            <input
              className="address-input"
              placeholder="City"
            />
           <select className="address-input">
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            </div>
            <div className="proceed">
            <p>
              By proceeding, I accept the <b>T&C</b> and <b>Privacy Policy</b>
            </p>
           
          </div>
            <button onClick={handleAddressClose} className="btn1">
              Save Address
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPhone;
