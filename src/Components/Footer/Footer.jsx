import React from "react";
import "./Footer.css";
import amazoneLogo from "../../Assets/amazonLogo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerCont1">
          <div className="contentFooterTitle">Get To Know Us</div>
          <div className="contentFooterSubTitleDiv">
            <div className="contentFooterSubTitleCont">About Us</div>
            <div className="contentFooterSubTitleCont">Careers</div>
            <div className="contentFooterSubTitleCont">Press Releases</div>
            <div className="contentFooterSubTitleCont">Amazon Science</div>
          </div>
        </div>

        <div className="footerCont1">
          <div className="contentFooterTitle">Connect with Us</div>
          <div className="contentFooterSubTitleDiv">
            <div className="contentFooterSubTitleCont">Facebook</div>
            <div className="contentFooterSubTitleCont">Twitter</div>
            <div className="contentFooterSubTitleCont">Instagram</div>
          </div>
        </div>

        <div className="footerCont1">
          <div className="contentFooterTitle">Make Money with Us</div>
          <div className="contentFooterSubTitleDiv">
            <div className="contentFooterSubTitleCont">Sell on Amazon</div>
            <div className="contentFooterSubTitleCont">
              Sell under Amazon Accelerator
            </div>
            <div className="contentFooterSubTitleCont">
              Protect and Build Your Brand
            </div>
            <div className="contentFooterSubTitleCont">
              Amazon Global Selling
            </div>
            <div className="contentFooterSubTitleCont">Supply to Amazon</div>
            <div className="contentFooterSubTitleCont">Become an Affiliate</div>
            <div className="contentFooterSubTitleCont">
              Amazon Pay on Merchants
            </div>
          </div>
        </div>
        <div className="footerCont1">
          <div className="contentFooterTitle">Let Us Help You</div>
          <div className="contentFooterSubTitleDiv">
            <div className="contentFooterSubTitleCont">Your Account</div>
            <div className="contentFooterSubTitleCont">Returns Centre</div>
            <div className="contentFooterSubTitleCont">
              Recalls and Product Safety Alerts
            </div>
            <div className="contentFooterSubTitleCont">
              100% Purchase Protection
            </div>
            <div className="contentFooterSubTitleCont">Amazon App Download</div>
            <div className="contentFooterSubTitleCont">Help</div>
          </div>
        </div>
      </div>

      <div className="amazonImg">
        <img src={amazoneLogo} alt="" className="amzonImgFooter" />
      </div>
    </div>
  );
}

export default Footer;
