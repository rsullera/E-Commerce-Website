import Wrapper from "../assets/wrappers/Footer";
import logo from "../assets/images/mainlogo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-logo" id="footer-section">
        <img src={logo} alt="Kape Kalakal Logo" />
        <p>Kape / Kalakal</p>
      </div>

      <div className="footer-section">
        <h4>Online Shops</h4>
        <a href="#">Shopee</a>
        <a href="#">Lazada</a>
        <a href="#">TikTok Shop</a>
      </div>

      <div className="footer-section">
        <h4>Social Media</h4>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">TikTok</a>
      </div>

      <div className="subscribe">
        <p>Stay updated with our promos & brew tips.</p>
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>

      <p className="footer-rights">© 2025 Kape Kalakal. All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;

// import { Link } from "react-router-dom"; // ✅ only this
// import logo1 from "../assets/images/kklogo2.svg";
// import Wrapper from "../assets/wrappers/Footer";

// const Footer = () => {
//   return (
//     <Wrapper>
//       <section>
//         <div className="footer-section" id="footer-section">
//           <div className="footer-column first">
//             <div className="footer-logo"></div>
//             <img src={logo1} alt="" className="footer-logo-logo" />
//             <p className="kape-kalakal">Kape / Kalakal</p>
//             <p>Brewed passion,</p> <p>Sustainably sourced.</p>
//             <p>Locally roasted</p>
//           </div>
//           <div className="footer-column second">
//             <p>Shop Location</p>
//             <p>Makati City</p>
//             <p>Mandaluyong</p>
//             <p>Pasig City</p>
//             <p>Cebu</p>
//             <p>Davao</p>
//           </div>

//           <div></div>
//           <div className="footer-column fourth">
//             <p>Online Shop</p>
//             <p>Logo</p>
//             <p>Logo</p>
//             <p>Logo</p>
//             <p>Logo</p>
//             <p>Logo</p>
//           </div>
//           <div className="footer-column fifth">
//             <input
//               type="gmail"
//               name="ggmail"
//               id="gmail"
//               placeholder="Gmail"
//               className="footer-gmail"
//             />
//             <button className="footer-btn">Subscribe</button>
//             <p>Stay updated with our promos & brew tips</p>
//           </div>

//           <div className="footer-reserved six">
//             <p>© 2025 Kape Kalakal. All rights reserved.</p>
//           </div>
//         </div>
//       </section>
//     </Wrapper>
//   );
// };

// export default Footer;
