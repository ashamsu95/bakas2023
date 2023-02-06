import React from "react";
import Contactform from "./Contactform.js";

const Contactus = () => {
  return (
    <div className="row ptl ">
      <div className="textcenter colorblack ">
        <h1 className="pelleteheading_primary">Contact Us</h1>
      </div>
      <div className="contacusbox ptl pbl">
        <div className="greenbackground boxleft white">
          <div className="contactitle">
            <h1>Contact Information</h1>
            <p>Our team of experts is on hand to answer your questions</p>
          </div>
          <div className="Contatcnumber flexcy">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9332 12.0718C15.7621 16.8994 16.8575 11.3144 19.9321 14.3869C22.8962 17.3502 24.5999 17.9439 20.8443 21.6983C20.3739 22.0764 17.3851 26.6246 6.88136 16.1238C-3.62368 5.62168 0.921918 2.6298 1.30007 2.15952C5.06468 -1.60534 5.64815 0.1082 8.61228 3.0715C11.6869 6.14523 6.10427 7.24429 10.9332 12.0718Z"
                fill="#F2EEE9"
              />
            </svg>
            <p>+977-01-5111032 | +977-9823612006</p>
          </div>
          <div className="conatcaddress flexcy">
            <svg
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 12.2197C10.1531 12.2197 10.7124 11.99 11.1779 11.5306C11.6426 11.072 11.875 10.5204 11.875 9.8758C11.875 9.23121 11.6426 8.67921 11.1779 8.2198C10.7124 7.76116 10.1531 7.53185 9.5 7.53185C8.84688 7.53185 8.28796 7.76116 7.82325 8.2198C7.35775 8.67921 7.125 9.23121 7.125 9.8758C7.125 10.5204 7.35775 11.072 7.82325 11.5306C8.28796 11.99 8.84688 12.2197 9.5 12.2197ZM9.5 23.5C9.34167 23.5 9.18333 23.4707 9.025 23.4121C8.86667 23.3535 8.72812 23.2754 8.60938 23.1777C5.71979 20.658 3.5625 18.3191 2.1375 16.1611C0.7125 14.0023 0 11.9854 0 10.1102C0 7.18025 0.955146 4.84607 2.86544 3.10764C4.77494 1.36921 6.98646 0.5 9.5 0.5C12.0135 0.5 14.2251 1.36921 16.1346 3.10764C18.0449 4.84607 19 7.18025 19 10.1102C19 11.9854 18.2875 14.0023 16.8625 16.1611C15.4375 18.3191 13.2802 20.658 10.3906 23.1777C10.2719 23.2754 10.1333 23.3535 9.975 23.4121C9.81667 23.4707 9.65833 23.5 9.5 23.5Z"
                fill="#F2EEE9"
              />
            </svg>
            <p>8th Floor, Trade Tower, Thapathali, Kathmandu,Nepal</p>
          </div>
          <div className="contactemail flexcy">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6 0H2.4C1.08 0 0.012 1.125 0.012 2.5L0 17.5C0 18.875 1.08 20 2.4 20H21.6C22.92 20 24 18.875 24 17.5V2.5C24 1.125 22.92 0 21.6 0ZM21.12 5.3125L12.636 10.8375C12.252 11.0875 11.748 11.0875 11.364 10.8375L2.88 5.3125C2.75967 5.24214 2.6543 5.14708 2.57027 5.03307C2.48623 4.91906 2.42527 4.78847 2.39109 4.64921C2.35691 4.50995 2.3502 4.36492 2.37139 4.22288C2.39257 4.08085 2.4412 3.94477 2.51434 3.82288C2.58747 3.70099 2.68359 3.59582 2.79687 3.51374C2.91015 3.43167 3.03825 3.37439 3.17339 3.34537C3.30854 3.31636 3.44794 3.31621 3.58315 3.34494C3.71835 3.37366 3.84656 3.43067 3.96 3.5125L12 8.75L20.04 3.5125C20.1534 3.43067 20.2816 3.37366 20.4169 3.34494C20.5521 3.31621 20.6915 3.31636 20.8266 3.34537C20.9618 3.37439 21.0898 3.43167 21.2031 3.51374C21.3164 3.59582 21.4125 3.70099 21.4857 3.82288C21.5588 3.94477 21.6074 4.08085 21.6286 4.22288C21.6498 4.36492 21.6431 4.50995 21.6089 4.64921C21.5747 4.78847 21.5138 4.91906 21.4297 5.03307C21.3457 5.14708 21.2403 5.24214 21.12 5.3125Z"
                fill="#F2EEE9"
              />
            </svg>
            <p>ashamsuu@gmail.com</p>
          </div>
        </div>
        <div className="boxright">
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
