import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Home";
import logo1 from "../assets/images/kklogo2.svg";
import coco1 from "../assets/images/diwata.png";
import coco from "../assets/images/cc.png";
import coco2 from "../assets/images/pakk.png";
import seven from "../assets/images/lucky.jpg";
import shop from "../assets/images/kk.jpg";

import coffee from "../assets/images/cofff.webp";
import mag from "../assets/images/mag3.png";
import cap from "../assets/images/cofemodel.png";
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
        <section className="hero-section">
          <img src={mag} alt="" className="hero-image-image" />
          <p className="main-text">
            Let your mug carry <br /> the moments.
          </p>
          <p className="sub-text">Your timeless brew is just a click away.</p>
          <div className="hero-btn">
            <button className="hero-btn-btn">Order Now</button>
          </div>
        </section>

        {/* BEST SECTION */}
        <section className="best-section">
          <div className="best-text">
            <p className="main-best-text">Best Sellers</p>
            <p className="sub-best-text">Browse all products →</p>
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
          </p>
          <div className="off-btn">
            <button className="off-btn-btn">Order Now</button>
          </div>
          <img src={cap} alt="" className="off-image" />
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section">
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

    // <Wrapper>
    //   <main>
    //     {/* HOME-SECTION */}
    //     <section className="home-section" id="home-section">
    //       <h1>Let your mug carry the moments.</h1>
    //       <p>Your timeless brew is just a click away! </p>
    //       <div className="home-btn">
    //         <Link to="/product" className="member-btn">
    //           <button className="home-btn-btn">Order Now</button>
    //         </Link>
    //       </div>
    //     </section>

    //     {/* TOP-SECTION */}
    //     <section className="top-container">
    //       <p>Top selling item!</p>
    //       <div className="selling">
    //         {[...Array(4)].map((_, i) => (
    //           <div className="selling-container" key={i}>
    //             <img src={seven} alt="" className="selling-img" />
    //             <div className="selling-text">
    //               <h3>Product</h3>
    //               <h5>Rate</h5>
    //               <h4>Price</h4>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </section>

    //     {/* OFF-SECTION */}
    //     <section className="off-section">
    //       <div className="off-row">
    //         <div className="off-container">
    //           <p className="off">Grab Upto 50% Off on Selected Coffee</p>
    //           <Link to="/product" className="buy">
    //             <button className="off-btn-btn">Buy Now</button>
    //           </Link>
    //         </div>

    //         {[coco1, coco2, coco].map((img, i) => (
    //           <div className="img" key={i}>
    //             <img src={img} alt="" className="off-img" />
    //           </div>
    //         ))}
    //       </div>
    //     </section>

    //     {/* INFO-SECTION */}
    //     <section>
    //       <div className="info-section" id="info-section">
    //         <h1>KAPE / KALAKAL</h1>
    //         <h3>
    //           Unit 5, Brixton Building Kapitolyo, Pasig City Metro Manila,
    //           Philippines 1603
    //         </h3>
    //         <hr />
    //         <div className="info-img-section">
    //           <div className="info-h4 item1">
    //             <h4>Brewed Legacy</h4>
    //             <p>
    //               Kape / Kalakal is more than just a coffee brand — it's a
    //               celebration of Filipino craftsmanship and community. Blending
    //               the warmth of local brews with the spirit of grassroots trade,
    //               Kape / Kalakal connects consumers to stories behind every cup
    //               and every crafted item.
    //             </p>
    //             <br></br>
    //             <p>
    //               From handpicked beans grown in the highlands of Benguet to
    //               locally made goods sourced from homegrown artisans, this
    //               initiative breathes life into the value of slow living and
    //               meaningful exchange. In an age of mass production, Kape /
    //               Kalakal stands as a quiet movement — one that invites us to
    //               sip with intention and support with heart.
    //             </p>
    //             <br />
    //             <p>
    //               As interest in locally made products continues to grow, Kape /
    //               Kalakal is positioning itself not just as a café or store, but
    //               as a platform. Its future plans include community trade fairs,
    //               barista workshops featuring indigenous brewing methods, and
    //               expanded partnerships with farming cooperatives across the
    //               country. The dream is simple yet powerful: to put Filipino
    //               coffee and craftsmanship where it belongs — on every table, in
    //               every home, and in every story we proudly share with the
    //               world.
    //             </p>
    //             <br></br>
    //             <p>
    //               As interest in locally made products continues to grow, Kape /
    //               Kalakal is positioning itself not just as a café or store, but
    //               as a platform. Its future plans include community trade fairs,
    //               barista workshops featuring indigenous brewing methods, and
    //               expanded partnerships with farming cooperatives across the
    //               country. The dream is simple yet powerful: to put Filipino
    //               coffee and craftsmanship where it belongs.
    //             </p>
    //           </div>

    //           <div className="info-h5 item2">
    //             <h5>Rooted in Tradition</h5>
    //             <p>
    //               The concept behind Kape / Kalakal was born from a desire to
    //               revive the value of local not just in flavor, but in economy.
    //               Each mug poured represents a direct link to Filipino farmers,
    //               roasters, and makers whose crafts often go unnoticed in larger
    //               commercial spaces. By bringing these products to the
    //               forefront, the initiative not only promotes ethical sourcing,
    //               but also empowers small communities to thrive through
    //               sustainable trade. It is coffee, yes but it is also
    //               livelihood, pride, and history in every grain.
    //             </p>
    //             <br />
    //             <p>
    //               Unlike typical cafes that chase trends, Kape / Kalakal finds
    //               its identity in purpose. Its menu highlights single-origin
    //               beans from various Philippine provinces, and each product on
    //               its shelves whether it’s a handmade tote, ceramic mug, or
    //               native delicacy comes with the name of the artisan who created
    //               it.
    //             </p>
    //             <hr />
    //           </div>
    //           <div className="info-ctn-image item3">
    //             <img src={shop} alt="info" className="info-image" />
    //           </div>

    //           <div className="info-costumer item4">
    //             <h2>What Our Customers Say</h2>
    //             <p>
    //               <span>“Every sip tells a story.”</span> The aroma, the
    //               richness — it’s more than coffee. It’s a journey back to the
    //               roots of Filipino culture. — Samantha D., Pasig
    //             </p>
    //             <br />
    //             <p>
    //               <span> “Locally brewed, globally loved.” </span>I never knew
    //               local beans could taste this premium. Hats off to Kape /
    //               Kalakal for uplifting Filipino coffee. — Miguel A., Baguio
    //             </p>
    //             <br />
    //             <p>
    //               <span>“Feels like home in a cup.”</span> The warm, earthy
    //               blend and the handmade cup made it extra special. You can feel
    //               the heart in the brew. — Reina M., Davao
    //             </p>
    //             <br />
    //             <p>
    //               <span> “Barako, but better.”</span> Smooth but bold, their
    //               version of kapeng barako hits the spot every time. Proud to
    //               drink Pinoy coffee like this. — Leo G., Batangas
    //             </p>
    //             <br />
    //             <p>
    //               <span> “Gawa sa puso, hindi makina.”</span> The handmade
    //               experience — from mug to roast — gives that artisanal feel
    //               that’s rare nowadays. — Tina F., Iloilo
    //             </p>
    //           </div>
    //         </div>
    //         <p className="info-number">03</p>
    //       </div>
    //     </section>
    //   </main>
    // </Wrapper>
  );
};
export default Home;
