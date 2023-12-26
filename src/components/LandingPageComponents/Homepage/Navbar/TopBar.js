import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../../assets/landingImages/logo.svg";
import profile from "../../../../assets/landingImages/profile.svg";
import cart from "../../../../assets/landingImages/cart.svg";
import searchIcon from "../../../../assets/landingImages/searchIcon.svg";
import featherMenu from "../../../../assets/landingImages/Icon feather-menu.svg";
import warningIcon from "../../../../assets/landingImages/warning-icon.svg";
import { HeaderTopBar } from "./StyledNavbar";
// import { useHistory } from "react-router-dom";
import SideNavBar from './SideCanvas'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './topbar.css'
// import {  } from '../../'
const TopBar = ({ setShow }) => {
  // const history = useHistory();

  const { token } = useSelector((state) => state.recruitAuth.loginInfo)

  const [navbar, setNavbar] = useState(false);


  const [sideNavShow, setSideNavShow] = useState(false);

  const handleClose = () => setSideNavShow(false);
  const handleShow = () => setSideNavShow(true);



  const changeBackground = () => {
    window.onwheel = (e) => {
      if (e.deltaY >= 0) {
        // Scrolling Down with mouse
        setNavbar(true);
      } else {
        // Scrolling Up with mouse
        setNavbar(false);
      }
    };
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <HeaderTopBar>
      <SideNavBar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
      <div className="topBar-Header p-2">
        <Navbar bg="transparent" variant="dark" className="flex justify-between">
          <div className="reponsive-topbar-toggler" >
            <img className="img-fluid mt-3 cursor-pointer" src={featherMenu} alt="featherMenu" onClick={handleShow} />
          </div>
          <div className="bscontainer-fluid">
            <div className="flex justify-between items-center">
              <Navbar.Brand to="#">
                <img className="img-fluid header-topBar-logo" src={logo} alt="logo" />
              </Navbar.Brand>
              <nav className="flex justify-center p-3 ">
                <Link to="#" className="topbar-nav-icon">
                  <div className="searchBox flex items-center">
                    <input className="searchInput" type="text" name="" placeholder="Search" />
                    <button className="searchButton" href="#">
                      <img className="img-fluid w-[60%]  " src={searchIcon} alt="featherMenu" />
                    </button>
                  </div>
                  {/* <div className="searchBox">
                  <img className="img-fluid mr-[35px]"  src={searchIcon} alt="featherMenu" />
                </div> */}
                </Link>
                <Link to={token ? "" : "/signin"} className="topbar-nav-icon">
                  <img className="img-fluid mr-[35px] w-[64%]" src={profile} alt="featherMenu" />
                </Link>
                {
                  token &&
                  <>
                    <Link to="/e-cart" className="topbar-nav-icon">
                      <img className="img-fluid mr-[35px] w-[62%]" src={warningIcon} alt="accessibility " />
                    </Link>
                    <Link to="/e-cart" className="topbar-nav-icon"  >
                      <img className="img-fluid mr-[35px] w-[62%]" src={cart} alt="featherMenu" />
                    </Link>
                    <Link to="#" className="topbar-nav-icon">
                      <img onClick={() => setShow(true)} className="img-fluid w-[25px] lg:w-full" src={featherMenu} alt="featherMenu" />
                    </Link>
                  </>
                }
              </nav>

            </div>
          </div>
        </Navbar>
      </div>
    </HeaderTopBar>
  );
};

export default TopBar;
