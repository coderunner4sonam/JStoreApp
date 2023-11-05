import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import logo from "../assets/logo.webp";
import { BiSearch } from "react-icons/bi";
import { BsBagHeartFill } from "react-icons/bs";
import { AiOutlineAlignLeft } from "react-icons/ai";
import avtar from "../assets/avtar.jpg";
import { globalstate } from "../Context";
function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let {count}=useContext(globalstate)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (option) => {
    // Handle the selected option
    console.log("Selected option:", option);
  };

  useEffect(() => {
    // Update the window width state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
 console.log(windowWidth)

  return (
    <div className="header">
      <div className="header-brand">
        <img src={logo} alt="" className="logoStyle" />
      </div>
      {
          windowWidth < 761 ?   
          <button className="searchIcon">
          <BiSearch />
        </button>
          :
      <div className="searchContainer">
       <input type="text" className="searchInput" />
       <hr/>
        <button className="searchIcon searchIconborder">
          <BiSearch />
        </button>
      </div>
      }   

      <div className="avtarContainer" >
        <button>
          <AiOutlineAlignLeft className="lineicon" />
        </button>
        <BsBagHeartFill className="lineicon" />
         <h1 className="addtocart_count">{count}</h1> 
        <img src={avtar} alt="" className="avtarStyle"  onClick={toggleDropdown}/>
      </div>
      {isDropdownOpen && (
        <div className="dropdownMenu">
          <div
            className="dropdownItem"
            onClick={() => handleDropdownItemClick("Orders")}
          >
            Orders
          </div>
          <div
            className="dropdownItem"
            onClick={() => handleDropdownItemClick("Wishlist")}
          >
            Wishlist
          </div>
          <div
            className="dropdownItem"
            onClick={() => handleDropdownItemClick("Contact Us")}
          >
            Contact Us
          </div>
          <div
            className="dropdownItem"
            onClick={() => handleDropdownItemClick("Edit Profile")}
          >
            Edit Profile
          </div>
          <div
            className="dropdownItem"
            onClick={() => handleDropdownItemClick("Logout")}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
