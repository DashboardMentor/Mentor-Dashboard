import React, { useState } from 'react';
import './Payment.css';

const Payments = () => {
  const [isSideWindowOpen, setSideWindowOpen] = useState(false);
  const [formData, setFormData] = useState({
    panCard: '',
    accountHolderName: '',
    accountType: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    gstNo: ''
  });

  const toggleSideWindow = () => {
    setSideWindowOpen(!isSideWindowOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormComplete = () => {
    const { panCard, accountHolderName, accountType, accountNumber, confirmAccountNumber, ifscCode } = formData;
    return panCard && accountHolderName && accountType && accountNumber && confirmAccountNumber && ifscCode;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      setSideWindowOpen(false);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className={`payments ${isSideWindowOpen ? 'blur' : ''}`}>
      <h2>Payments</h2>
      <div className="main-section">
        <div className="left-section">
          <div className="payment-summary">
            <div className="payment-box">
              <p className="amount">₹ 0.00</p>
              <p className="description">Payment Received</p>
            </div>
            <div className="payment-box">
              <p className="amount">₹ 0.00</p>
              <p className="description">Pending payments</p>
            </div>
          </div>
          <div className="payment-table">
            <div className="tabs">
              <button className="tab active">Received</button>
              <button className="tab">Pending</button>
            </div>
            <div className="table-content">
              <div className="no-data">
                <img src="/path/to/image.png" alt="No data available" />
                <p>No data available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-section">
          <button className="add-payment-details" onClick={toggleSideWindow}>Click here to add payment details</button>
          <div className="guidelines">
            <h3>Guidelines</h3>
            <p>1. You can add your account details here. Please note that the payments won't be processed if this section is not completed. <a href="#">View More</a></p>
          </div>
        </div>
      </div>
      {isSideWindowOpen && (
        <div className="side-window">
          <div className="side-window-content">
            <button className="close-button" onClick={toggleSideWindow}>×</button>
            <h3>Payment Details</h3>
            <form onSubmit={handleSubmit}>
              <label>PAN Card No.</label>
              <input type="text" name="panCard" value={formData.panCard} onChange={handleChange} required />
              <label>Account Holder Name</label>
              <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} required />
              <label>Account Type</label>
              <select name="accountType" value={formData.accountType} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="savings">Savings Account</option>
                <option value="current">Current Account</option>
              </select>
              <label>Account Number</label>
              <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
              <label>Confirm Account Number</label>
              <input type="text" name="confirmAccountNumber" value={formData.confirmAccountNumber} onChange={handleChange} required />
              <label>IFSC Code</label>
              <input type="text" name="ifscCode" value={formData.ifscCode} onChange={handleChange} required />
              <label>GST No.</label>
              <input type="text" name="gstNo" value={formData.gstNo} onChange={handleChange} />
              <div className="side-window-buttons">
                <button type="button" onClick={toggleSideWindow}>Close</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>

      )}
    </div>
  );
};

export default Payments;
