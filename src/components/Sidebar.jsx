import React from "react";
import './../App.css';
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleIcon from "@mui/icons-material/Article";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Correct icon
import PaidIcon from "@mui/icons-material/Paid";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close'; // Correct import for Close Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';
import ForumIcon from '@mui/icons-material/Forum';

const Sidebar = (props) => {
  const navigate = useNavigate();
  const cPath = useLocation();
  
  const navProfilePage = () => {
    navigate('/profilePage');
    props.toggleProfilePage();
  };

  return (
    <div className="sidebar-container">
      <div className="logo-container" onClick={navProfilePage}>
        <div>Logo</div>
        <div className="logo-title">Dragon J</div>
        <div className="logo-subtitle">/dragonhubacademy</div>
      </div>
      <div className="social-icons-container">
        <div className="social-icon"><CloseIcon /></div>
        <div className="social-icon"><WhatsAppIcon /></div>
        <div className="social-icon"><LinkedInIcon /></div>
        <div className="social-icon"><EmailIcon /></div>
        <div className="social-icon"><ShareIcon /></div>
      </div>
      <hr />
      <div className="menu-container">
        <div
          className={`menu-item ${cPath.pathname === "/dashboard" || cPath.pathname === '/' ? "menu-item-active" : ""}`}
          onClick={() => navigate("/dashboard")}
        >
          <div className="menu-item-icon"><SpaceDashboardIcon /></div>
          <div className="menu-item-text">Dashboard</div>
        </div>
        <div
          className={`menu-item ${cPath.pathname === "/profile" ? "menu-item-active" : ""}`}
          onClick={() => navigate("/profile")}
        >
          <div className="menu-item-icon"><AccountCircleIcon /></div>
          <div className="menu-item-text">Profile</div>
        </div>
        <div
          className={`menu-item ${cPath.pathname === "/services" ? "menu-item-active" : ""}`}
          onClick={() => navigate("/services")}
        >
          <div className="menu-item-icon"><ArticleIcon /></div>
          <div className="menu-item-text">Services</div>
        </div>
        <div
          className={`menu-item ${cPath.pathname === "/booking" ? "menu-item-active" : ""}`}
          onClick={() => navigate("/booking")}
        >
          <div className="menu-item-icon"><TagFacesIcon /></div>
          <div className="menu-item-text">Booking</div>
        </div>
        <div
          className={`menu-item ${cPath.pathname === "/availability" ? "menu-item-active" : ""}`}
          onClick={() => navigate("/availability")}
        >
          <div className="menu-item-icon"><AccessTimeIcon /></div> {/* Updated */}
          <div className="menu-item-text">Availability</div>
        </div>
        <div
          className={`menu-item ${cPath.pathname === "/payment" ? "menu-item-active" : ""}`}
          onClick={() => navigate("/payment")}
        >
          <div className="menu-item-icon"><PaidIcon /></div>
          <div className="menu-item-text">Payment</div>
        </div>
        <div
          className={`menu-item ${cPath.pathname === "/feedback" ? "menu-item-active" : ""}`}
          onClick={() => navigate("/feedback")}
        >
          <div className="menu-item-icon"><FeedbackIcon /></div>
          <div className="menu-item-text">Feedback</div>
        </div>
      </div>
      <hr />
      <div className="faq-container">
        <div
          className={`faq-item ${cPath.pathname === "/faqs" ? "faq-item-active" : ""}`}
          onClick={() => navigate('/faqs')}
        >
          <div className="menu-item-icon"><ForumIcon /></div>
          <div className="menu-item-text">FAQs</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
