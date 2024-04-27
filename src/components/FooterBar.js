import logo from '../image/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterBar = () => {
    return (
        <div className="d-flex justify-content-around mt-5">
            <div>
                <img src={logo} />
                <div className="iconsvg">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                </div>
                <p className="faitCllu">2015-2022 Taxaide Technologies Limited. All rights reserved</p>
            </div>
            <div className="d-flex">
                <div className="me-5">
                    <h4>About Us</h4>
                    <a className="alinkft" href="#">About</a><br/>
                    <a className="alinkft" href="#">Legal & privacy</a>
                </div>
                <div>
                    <h4>Products</h4>
                    <a className="alinkft" href="#">TBook®</a><br/>
                    <a className="alinkft" href="#">TaxiTWithhold®</a><br/>
                    <a className="alinkft" href="#">TaxiTPayroll®</a>
                </div>
            </div>
        </div>
    )
}

export default FooterBar;