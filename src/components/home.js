import React, { useState } from "react";
import { Button } from "@mui/material";
import './home.css'
import logo from '../static/logo.png';
import cancerLogo from '../static/cancer-light.png'
import revolutionLogo from '../static/revolution.png'
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import leafs from '../static/leafs.png';
import birds from '../static/birds.png';


function Home() {
    const [isMobile, setIsMobile] = useState(false);

    const ontoggle = () => {
        if (isMobile === false) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="links">
                    <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
                        <li className="usericon"><PersonIcon style={{ marginTop: "25px", fontSize: "2em" }} /></li>
                        <li>
                            <p className="signin">SING IN</p>
                        </li>
                        <li><p>SIGN UP</p></li>
                        <li><input type="text" placeholder="Search.." className="search"></input></li>
                        <li><Button variant="contained" style={{ color: "black", backgroundColor: "#dedede", paddingLeft: "20px", paddingRight: "20px", marginTop: "20px", borderRadius: "10px" }}>ABOUT US</Button></li>
                        <li> <Button variant="contained" style={{ color: "black", backgroundColor: "#dedede", paddingLeft: "20px", paddingRight: "20px", marginTop: "20px", borderRadius: "10px" }}>CONTACT US</Button></li>
                    </ul>

                    <div className="menu">
                        <button style={{ backgroundColor: "transparent", border: "none" }}
                            onClick={() => { ontoggle(); }}>
                            <MenuIcon sx={{ fontSize: 40 , color:"white"}} /> </button>
                    </div>
                </div>
            </nav>

            <main>
                <div className="left-sidebar">
                    <div style={{ height: "2px" }}></div>

                    <div className="left-menu">
                        <button style={{ backgroundColor: "transparent", border: "none" }}
                            onClick={() => { ontoggle(); }}>
                            <MenuIcon sx={{ fontSize: 40 , color:"white"}} /> </button>
                    </div>

                    <ul className="left-list">
                        <li> Clinical Trial Finder</li>
                        <li> CC Treatment Guide</li>
                        <li> Pharmaceutical Consulting</li>
                        <li> Cancer Center Consulting</li>
                        <li> My Profile</li>

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
                </div>
                <div className="right-content"></div>
            </main>
            <footer>
                <div className="footer">
                    <img className="birds" src={birds}></img>
                </div>
                <div className="footer">
                    <img src={leafs} ></img>
                </div>
            </footer>
        </>
    )
}
export default Home;