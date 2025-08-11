import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Home";

import coffee from "../assets/images/cofff.webp";
import mag from "../assets/images/mag3.png";
import cap from "../assets/images/modelcoffee.png";
import store from "../assets/images/kk.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = ({ user, error }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Wrapper>
      <main>
        {/* HERO SECTION */}
        <section className="hero-section" id="hero-section">
          <img src={mag} alt="" className="hero-image-image" />
          <p className="main-text">
            Let your mug carry <br /> the moments.
          </p>
          <p className="sub-text">Your timeless brew is just a click away.</p>
          <Link to="/productlist#product-section" className="nav-link">
            <div className="hero-btn">
              <button className="hero-btn-btn">Order Now</button>
            </div>
          </Link>
        </section>

        {/* BEST SECTION */}
        <section className="best-section">
          <div className="best-text">
            <p className="main-best-text">Best Sellers</p>
            <Link to="/productlist#product-section" className="nav-link">
              <p className="sub-best-text">Browse all products →</p>
            </Link>
          </div>
          <div className="best-container">
            <div className="card">
              <div className="card-header">
                <h3>Product Title</h3>
                <span className="price">$20</span>
              </div>

              <div className="image-container">
                <img src={coffee} alt="coffee" />
              </div>

              <button className="add-to-cart">Add to cart</button>
            </div>

            <div className="card">
              <div className="card-header">
                <h3>Product Title</h3>
                <span className="price">$20</span>
              </div>

              <div className="image-container">
                <img src={coffee} alt="coffee" />
              </div>

              <button className="add-to-cart">Add to cart</button>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Product Title</h3>
                <span className="price">$20</span>
              </div>

              <div className="image-container">
                <img src={coffee} alt="coffee" />
              </div>

              <button className="add-to-cart">Add to cart</button>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Product Title</h3>
                <span className="price">$20</span>
              </div>

              <div className="image-container">
                <img src={coffee} alt="coffee" />
              </div>

              <button className="add-to-cart">Add to cart</button>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Product Title</h3>
                <span className="price">$20</span>
              </div>

              <div className="image-container">
                <img src={coffee} alt="coffee" />
              </div>

              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        </section>

        {/* OFF SECTION */}
        <section className="off-section">
          <p className="main-off-text">
            Grab Upto 50% Off on <br />
            Selected Coffee
          </p>{" "}
          <Link to="/product#product-section" className="nav-link">
            <div className="off-btn">
              <button className="off-btn-btn">Buy Now</button>
            </div>
          </Link>
          <img src={cap} alt="" className="off-image" />
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section" id="about-section">
          <p className="main-about-text">Our Story</p>
          <div className="about-info">
            <p className="sub-about-text">
              In 2021, fueled by a shared love for great coffee and thoughtful
              spaces, Coco Martin opened the doors to what would become more
              than just a coffee shop — it became a community hub. What began as
              a simple idea — to create a place where quality coffee meets
              meaningful connection — quickly turned into a mission to elevate
              everyday routines. With a background in [optional: design /
              hospitality / business / coffee roasting], Coco Martin set out to
              build a space that felt modern, welcoming, and intentional. From
              our very first pour to every espresso we pull today, we’ve stayed
              true to the belief that good coffee brings people together — and
              that’s exactly what we’re here for.
            </p>

            <div className="about-image">
              <img src={store} alt="" className="about-image-image" />
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};
export default Home;
