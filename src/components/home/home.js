import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { Button } from "@mui/material";
import '../css/global.css';
import './home.css';
import logo from '../../static/logo.png';
import cancerLogo from '../../static/cancer-light.png'
import revolutionLogo from '../../static/revolution.png'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import leafs from '../../static/leafs.png';
import birds from '../../static/birds.png';
import intro from '../../static/intro.mp4';


function Home() {
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
                <div className="right-content">
                    <div className="right-container">
                        <div className="text">
                            <h1>Welcome to Cancer Clarity</h1>
                            <p>Choosing the right disease process for your asset is imperative. Several drugs have performed suboptimally because they weren't studied in the ideal disease. As opposed to all of our competitors, we have broad expertise in all of hematology and medical oncology, uniquely enabling us to best identify where to position your asset. Our consultants all have MD and MBA degrees, and have conducted clinical trials in numerous hematologic and oncologist disorders. Our CEO has an MD, PhD, and MBA, and has participated in nearly 100 clinical trials. He has three papers in the NEJM and two in Lancet. He served as the medical director for Xbiotech, and was the national medical monitor for three of their trials.</p>
                            <Link to='/cancer/menu' style={{textDecoration:"none"}}><Button variant="contained" style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "20px", borderRadius: "10px" }}>ENTER THE SITE</Button></Link>
   
                        </div>
                        <div className="media">
                            <video src={intro} autoPlay loop muted/>
                        
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
export default Home;