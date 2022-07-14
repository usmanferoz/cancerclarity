import React, { useState } from "react";
import { Button } from "@mui/material";
import '../css/global.css';
import './cancer_menu.css';
import logo from '../../static/logo.png';
import cancerLogo from '../../static/cancer-light.png'
import revolutionLogo from '../../static/revolution.png'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import leafs from '../../static/leafs.png';
import birds from '../../static/birds.png';
import treatmentGuide from '../../static/treatment-guide.png'
import centerGuide from '../../static/center-guide.png'
import pharaLogo from '../../static/pharma.png'
import trialFinder from '../../static/trial-finder.png'

function CancerMenu() {
    const [isTopNav, setIsTopNav] = useState(false);
    const [isLeftNav, setIsLeftNav] = useState(false)

    const toogleTop = () => {
        if (isTopNav === false) {
            setIsTopNav(true);
        }
        else {
            setIsTopNav(false);
        }
    }

    const toogleLeft = () => {
        if (isLeftNav === false) {
            setIsLeftNav(true);
        }
        else {
            setIsLeftNav(false);
        }
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="links">
                    <ul className={isTopNav ? "nav-links-mobile" : "nav-links"}>
                        <li className="usericon"><PersonIcon style={{ marginTop: "25px", fontSize: "2em" }} /></li>
                        <li>
                            <p className="signin">SIGN IN</p>
                        </li>
                        <li><p>SIGN UP</p></li>
                        <li><input type="text" placeholder="Search.." className="search"></input></li>
                        <li><Button variant="contained" style={{ color: "black", backgroundColor: "#dedede", paddingLeft: "20px", paddingRight: "20px", marginTop: "20px", borderRadius: "10px" }}>ABOUT US</Button></li>
                        <li> <Button variant="contained" style={{ color: "black", backgroundColor: "#dedede", paddingLeft: "20px", paddingRight: "20px", marginTop: "20px", borderRadius: "10px" }}>CONTACT US</Button></li>
                    </ul>

                    <div className="menu">
                        <button style={{ backgroundColor: "transparent", border: "none" }}
                            onClick={() => { toogleTop(); }}>
                            <MenuIcon sx={{ fontSize: 40, color: "white" }} /> </button>
                    </div>
                </div>
            </nav>

            <main>
                <div className="left-sidebar">
                    <div style={{ height: "2px" }}></div>
                    <ul className={isLeftNav ? "mobile-left-list" : "left-list"}>
                        <li> <div className="dot1"></div> Clinical Trial Finder</li>
                        <li><div className="dot2"></div> CC Treatment Guide</li>
                        <li><div className="dot3"></div> Pharmaceutical Consulting</li>
                        <li><div className="dot4"></div> Cancer Center Consulting</li>
                        <li><div className="dot5"></div> My Profile</li>

                        <div className="sister-sites">
                            <p className="tag">SISTER SITES</p>
                            <div className="wrapper">
                                <img src={cancerLogo}></img>
                                <p>Cancer Light</p>
                            </div>
                            <div className="wrapper">
                                <img src={revolutionLogo}></img>
                                <p>Revolution Center</p>
                            </div>
                        </div>

                    </ul>
                    <div className="left-menu">
                        <button style={{ backgroundColor: "transparent", border: "none" }}
                            onClick={() => { toogleLeft(); }}>
                            <MenuIcon sx={{ fontSize: 40, color: "black" }} /> </button>
                    </div>
                </div>
                <div className="right-content1">
                    <div className="right-container1">
                        <div style={{ height: "2px" }}></div>
                        <div className="box">
                            <div className="box-wrapper">
                                <div className="box1">
                                <img src={trialFinder}></img>
                                </div>
                                <p>Clinical Trial Finder</p>
                            </div>
                            <div className="box-wrapper">
                                <div className="box2">
                                <img src={treatmentGuide}></img>
                                </div>
                                <p>CC Treatment Guide</p>
                            </div>
                            <div className="box-wrapper">
                                <div className="box3">
                                <img src={pharaLogo}></img>
                                </div>
                                <p>Pharmaceutical Consulting</p>
                            </div>
                            <div className="box-wrapper">
                                <div className="box4">
                                <img src={centerGuide}></img>
                                </div>
                                <p>Cancer Center Consulting</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footer">
                    <img className="birds" src={birds}></img>
                </div>
                <div className="footer">
                    <img className="plant" src={leafs} ></img>
                </div>
            </footer>
        </>
    )
}
export default CancerMenu;