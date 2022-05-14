import React, { useState, useEffect } from "react";
import Footer from "./includes/Footer";
import Header from "./includes/Header";

const parser = new DOMParser();
export default function Home() {
  const [data, setData] = useState([]);
  const loadData = () => {
    fetch("https://icircles.app/api/printingpress/home/140")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <section>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {data.sliders &&
              data.sliders.map((slider, key) => {
                return (
                  <button
                    key={key}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={key}
                    className={key == 0 ? "active" : ""}
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                );
              })}
          </div>
          <div className="carousel-inner">
            {data.sliders &&
              data.sliders.map((slider, key) => {
                return (
                  <div
                    className={
                      key == 0 ? "carousel-item active" : "carousel-item"
                    }
                    key={key}
                  >
                    <div className="banner">
                      <div className="container">
                        <div className="banner_wrapper">
                          <div className="row d-flex align-items-center">
                            <div className="col-md-6 col-lg-6">
                              <div className="banner_item">
                                <h2>{slider.title}</h2>
                                <p>
                                  {
                                    parser.parseFromString(
                                      slider.description,
                                      "text/html"
                                    ).body.innerText
                                  }
                                </p>
                                <div className="banner_btn">
                                  <a href="#">Shop Now</a>
                                  <a href="#">Contact Us</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                              <div className="banner_content">
                                <img
                                  src={`https://icircles.app/uploads/slider/${data.ms_id}/${slider.image}`}
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section>
        <div className="feature">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="assets/images/feature1.png" alt="" />
                  <h3>Next day delivery</h3>
                  <p>
                    Available on selected products. Order before 2pm (EST)
                    Mon–Fri.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="assets/images/feature2.png" alt="" />
                  <h3>The iCircle Promise</h3>
                  <p>
                    We move heaven and earth so you’re happy with your order!
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="assets/images/feature3.png" alt="" />
                  <h3>Printfinity</h3>
                  <p>
                    Enjoy a different design on the back of every card – or
                    every Sticker – for free!
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="assets/images/feature4.png" alt="" />
                  <h3>Grow Your Business</h3>
                  <p>Get more for your print with iCircle Business Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="popular">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_header text-center">
                  <h2>
                    MOST <span>POPULAR</span>{" "}
                  </h2>
                  <p>
                    Your business experience should be encompass everything.
                    This includes ads, sales promotions, social media, your
                    website & your signage.
                  </p>
                </div>
              </div>
            </div>
            <div className="popular_wrapper">
              <div className="row">
                {data.product_categories &&
                  data.product_categories.map((category, key) => {
                    return (
                      <div className="col-sm-6 col-md-4 col-lg-3" key={key}>
                        <div className="populer_wrap">
                          <div className="popular_img">
                            <img src="assets/images/popular1.png" alt="" />
                          </div>
                          <div className="wrap_title">
                            <a href="#">
                              {category.name}
                              <span>
                                <i className="fa-solid fa-right-long"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bottole">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6">
                <div className="bottole_left">
                  <div className="main_img">
                    <img src="assets/images/bottole.png" alt="" />
                    <div className="sub_imgOne">
                      <img src="assets/images/bottole2.png" alt="" />
                    </div>
                    <div className="sub_imgTwo">
                      <img src="assets/images/bottole3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6">
                <div className="bottole_content">
                  <h3>Reuse. Refill. Refresh.</h3>
                  <p>
                    A reusable bottle you never use is pointless. That’s why we
                    spent months designing the iCircle Water Bottle. To create a
                    customisable bottle you could call your own, and want to use
                    again and again.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.{" "}
                  </p>
                  <div className="bootole_btn">
                    <a href="#">Shop Drinkware</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hire">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_header text-center">
                  <h2>
                    BESTSELLING <span>PRODUCTS</span>{" "}
                  </h2>
                  <p>
                    Your business experience should be encompass everything.
                    This includes ads, sales promotions, social media, your
                    website & your signage.
                  </p>
                </div>
              </div>
            </div>
            <div className="hire_wrapper">
              <div className="row card_slider">
                {data.featured_products &&
                  data.featured_products.map((pd) => {
                    return (
                      <div className="col-lg-4">
                        <div className="card_item">
                          <div className="content_img">
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                          </div>
                          
                          <div className="content_text">
                            <div className="title">
                              <span>{pd.name}</span>
                            </div>
                            <div className="content_footer">
                              <div className="content_btn">
                                Starting From <span>$25</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {data.popular_products &&
                  data.popular_products.map((pd) => {
                    return (
                      <div className="col-lg-4">
                        <div className="card_item">
                          <div className="content_img">
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                          </div>
                          
                          <div className="content_text">
                            <div className="title">
                              <span>{pd.name}</span>
                            </div>
                            <div className="content_footer">
                              <div className="content_btn">
                                Starting From <span>$25</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {data.bestselling_products &&
                  data.bestselling_products.map((pd) => {
                    return (
                      <div className="col-lg-4">
                        <div className="card_item">
                          <div className="content_img">
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                            <img src="assets/images/hireone.png" alt="" />
                          </div>
                          
                          <div className="content_text">
                            <div className="title">
                              <span>{pd.name}</span>
                            </div>
                            <div className="content_footer">
                              <div className="content_btn">
                                Starting From <span>$25</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="work">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_header text-center">
                  <h2>How Its Works</h2>
                  <p>
                    Your business experience should be encompass everything.
                    This includes ads, sales promotions, social media, your
                    website & your signage.
                  </p>
                </div>
              </div>
            </div>
            <div className="work_wrapper">
              <div className="play_button">
                <a
                  className="venobox"
                  data-autoplay="true"
                  data-vbtype="video"
                  href="https://youtu.be/HOcrE_ztEq0"
                >
                  {" "}
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work_card">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="work_wrap text-center">
                  <img src="images/work1.png" alt="" />
                  <h4>Easy Design</h4>
                  <p>
                    Our online tools make the process as simple and clear as
                    possible, and we’re working to improve your experience all
                    the time.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="work_wrap text-center">
                  <img src="images/work2.png" alt="" />
                  <h4>Make It Match</h4>
                  <p>
                    Our designs can be used across multiple printed products,
                    which makes it easier for you to create consistent,
                    professional marketing.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="work_wrap text-center">
                  <img src="images/work3.png" alt="" />
                  <h4>Absolutely Guaranteed</h4>
                  <p>
                    We stand by everything we sell. So if you’re not
                    satisfiedwith us , we’ll make itwill be right. Learn more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="clients">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_header text-center">
                  <h2>
                    Whats Says <span>Our Clients</span>{" "}
                  </h2>
                  <p>
                    Your business experience should be encompass everything.
                    This includes ads, sales promotions, social media, your
                    website & your signage.
                  </p>
                </div>
              </div>
            </div>

            <div className="client_wrapper">
              <div className="row client_slider">
                <div className="col-lg-6">
                  <div className="client_wrap">
                    <img src="images/quote.png" alt="" />
                    <p>
                      Slake is a top leading most popular portfolio site for
                      growing lalented designer orem ipsum dolor sit amet,
                      consectetur dcng aelit, sed do eiusmod tempor incididunt
                      labore design.
                    </p>

                    <div className="client_profile">
                      <div className="client_item">
                        <div className="client_img">
                          <img src="images/client11.png" alt="" />
                        </div>
                        <div className="detail">
                          <h5>Miki Jonson</h5>
                          <h6>Co-Founder</h6>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="client_wrap">
                    <img src="images/quote.png" alt="" />
                    <p>
                      Slake is a top leading most popular portfolio site for
                      growing lalented designer orem ipsum dolor sit amet,
                      consectetur dcng aelit, sed do eiusmod tempor incididunt
                      labore design.
                    </p>

                    <div className="client_profile">
                      <div className="client_item">
                        <div className="client_img">
                          <img src="images/client22.png" alt="" />
                        </div>
                        <div className="detail">
                          <h5>Miki Jonson</h5>
                          <h6>Co-Founder</h6>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="client_wrap">
                    <img src="images/quote.png" alt="" />
                    <p>
                      Slake is a top leading most popular portfolio site for
                      growing lalented designer orem ipsum dolor sit amet,
                      consectetur dcng aelit, sed do eiusmod tempor incididunt
                      labore design.
                    </p>

                    <div className="client_profile">
                      <div className="client_item">
                        <div className="client_img">
                          <img src="images/client11.png" alt="" />
                        </div>
                        <div className="detail">
                          <h5>Miki Jonson</h5>
                          <h6>Co-Founder</h6>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
