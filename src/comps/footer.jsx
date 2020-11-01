import React from "react"
import { Component } from "react"
import ReactDom from "react-dom"
import "../App.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const style3 = {
    width: "100%",
    marginLeft: "0%",
    marginRight: "0%",
    color: "white",
    backgroundColor: "#002f34",
    fontFamily: "Arial",
    marginTop: "12pc",
    height: "12px"
};


class las extends Component {
    render() {
        return (
            <>
                <table style={{ border: "1px solid white", borderCollapse: "collapse" }}>
                    <tr>
                        <td colSpan="2" style={{ width: "33.3%" }}><img src="https://statics.olx.com.pk/external/base/img/phone-app.png" /></td>
                        <td colSpan="2" style={{ width: "33.3%", color: "#002f34", fontFamily: "timesNewRoman", borderRight: "2px solid #ddd" }}>
                            <h1>TRY THE OLX APP</h1>
                            <h3>Buy, sell and find just about anything using the app on your mobile.</h3>
                            {/* <div style={{color: "gray"}}></div> */}
                        </td>
                        <td colSpan="2" style={{ width: "33.3%" }}>
                            <h3 style={{ marginLeft: "50px", fontFamily: "TimesNewRoman", color: "#002f34" }}>GET YOUR APP TODAY</h3>
                            <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" style={{ marginRight: "10px", marginLeft: "30px" }} />
                            <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" />
                        </td>
                    </tr>
                    <tr style={{ backgroundColor: "#DCDCDC", marginLeft: "50px", marginRight: "50px" }}>
                        <td>
                            <ul>
                                <li id="ftli"><h4>POPULAR CATEGORIES</h4></li>
                                <li id="ftli">Cars</li>
                                <li id="ftli">Flats for rent</li>
                                <li id="ftli">Jobs</li>
                                <li id="ftli">Mobile Phones</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                            <li id="ftli"><h4>TRENDING SEARCHES</h4></li>
                            <li id="ftli">Bikes</li>
                            <li id="ftli">Watches</li>
                            <li id="ftli">Books</li>
                            <li id="ftli">Dogs</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li id="ftli"><h4>ABOUT US</h4></li>
                                <li id="ftli">About OLX </li>
                                <li id="ftli">OLX Blog</li>
                                <li id="ftli">Contact Us</li>
                                <li id="ftli">OLX for Businesses</li>
                            </ul>

                        </td>
                        <td>
                            <ul>
                                <li id="ftli"><h4>OLX</h4></li>
                                <li id="ftli">Help</li>
                                <li id="ftli">Sitemap</li>
                                <li id="ftli">Legal & Privacy information</li>
                                <li id="ftli" style={{color: "#DCDCDC" }}>1</li>
                            </ul>
                        </td>
                        <td colSpan="2">
                            <ul>
                                <li id="ftli"><h4>Follow Us</h4></li>
                                <li id="ftli">
                                    <FacebookIcon /> <TwitterIcon /> <InstagramIcon /> <YouTubeIcon />
                                </li>
                                <li id="ftli" style={{color: "#DCDCDC" }}>1</li>
                                <li id="ftli"><img src="https://statics.olx.com.pk/external/base/img/appstore.png" alt=""/> <img src="https://statics.olx.com.pk/external/base/img/playstore.png" alt=""/></li>
                            </ul>    

                        </td>
                    </tr>
                    <tr style={{backgroundColor: "#002f34", color: "white", borderTop:"10px solid #002f34", borderBottom: "10px solid #002f34"}}>
                        <td colSpan="2" style={{textAlign: "right"}}>Other countries: India-South Africa-Indonesia</td>
                        <td colSpan="2"></td>
                        <td colSpan="2">Free Classifieds in Pakistan. © 2006-2020 OLX</td>
                    </tr>
                </table>
            </>
        );
    }
}

export default las;