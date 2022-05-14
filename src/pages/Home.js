import React, { useState, useEffect } from "react";
import Footer from "./includes/Footer";
import Header from "./includes/Header";

export default function Home() {
  const loadData = () => {
    fetch("https://icircles.app/api/printingpress/home/140")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <section>
        <div className="banner">
          <div className="container">
            <div className="banner_wrapper">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 col-lg-6">
                  <div className="banner_item">
                    <h2>Corporate identity Design For You</h2>
                    <p>
                      We can print your identy card, mugs, notebook, business
                      cards, brochure, Notebook and many more in resonable
                      price.
                    </p>
                    <div className="banner_btn">
                      <a href="#">Shop Now</a>
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="banner_content">
                    <img src="images/banner_content.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="feature">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="images/feature1.png" alt="" />
                  <h3>Next day delivery</h3>
                  <p>
                    Available on selected products. Order before 2pm (EST)
                    Mon–Fri.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="images/feature2.png" alt="" />
                  <h3>The iCircle Promise</h3>
                  <p>
                    We move heaven and earth so you’re happy with your order!
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="images/feature3.png" alt="" />
                  <h3>Printfinity</h3>
                  <p>
                    Enjoy a different design on the back of every card – or
                    every Sticker – for free!
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 text-center">
                <div className="feature_wrap">
                  <img src="images/feature4.png" alt="" />
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
                    Most <span>Popular</span>{" "}
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular1.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Business Cards
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular2.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Banners
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular3.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Postcards
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular4.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Wedding Invites
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular5.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Thank You Cards
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular6.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Posters
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular7.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Presentation Folders
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="populer_wrap">
                    <div className="popular_img">
                      <img src="images/popular8.png" alt="" />
                    </div>
                    <div className="wrap_title">
                      <a href="#">
                        Yard signs
                        <span>
                          <i className="fa-solid fa-right-long"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
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
                    <img src="images/bottole.png" alt="" />
                    <div className="sub_imgOne">
                      <img src="images/bottole2.png" alt="" />
                    </div>
                    <div className="sub_imgTwo">
                      <img src="images/bottole3.png" alt="" />
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
                    Hire A <span>Designer</span>{" "}
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
                <div className="col-lg-4">
                  <div className="card_item">
                    <div className="content_img">
                      <img src="images/hireone.png" alt="" />
                      <img src="images/hireone.png" alt="" />
                      <img src="images/hireone.png" alt="" />
                      <img src="images/hireone.png" alt="" />
                    </div>
                    <div className="content_profile">
                      <img src="images/h11.png" alt="" />
                    </div>
                    <div className="content_text">
                      <div className="content_head">
                        <a href="#">
                          Bayley Robertson{" "}
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </div>
                      <div className="content_middle">
                        <div className="star">
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
                        <div className="review">
                          <span>4.5 / 5.00 User Reviews</span>
                        </div>
                      </div>
                      <div className="title">
                        <span>
                          I Will Design A Creative and Standard Business Cars
                        </span>
                      </div>
                      <div className="content_footer">
                        <h3>
                          Starting From <span>$25</span>
                        </h3>
                        <div className="content_btn">
                          <a href="#">Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card_item">
                    <div className="content_img">
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                    </div>
                    <div className="content_profile">
                      <img src="images/h22.png" alt="" />
                    </div>
                    <div className="content_text">
                      <div className="content_head">
                        <a href="#">
                          Jullian H{" "}
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </div>
                      <div className="content_middle">
                        <div className="star">
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
                        <div className="review">
                          <span>4.5 / 5.00 User Reviews</span>
                        </div>
                      </div>
                      <div className="title">
                        <span>Design A Corporate Flyer For Your Buainess</span>
                      </div>
                      <div className="content_footer">
                        <h3>
                          Starting From <span>$30</span>
                        </h3>
                        <div className="content_btn">
                          <a href="#">Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card_item">
                    <div className="content_img">
                      <img src="images/hire3.png" alt="" />
                      <img src="images/hire3.png" alt="" />
                      <img src="images/hire3.png" alt="" />
                      <img src="images/hire3.png" alt="" />
                    </div>
                    <div className="content_profile">
                      <img src="images/h33.png" alt="" />
                    </div>
                    <div className="content_text">
                      <div className="content_head">
                        <a href="#">
                          Petterson S{" "}
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </div>
                      <div className="content_middle">
                        <div className="star">
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
                        <div className="review">
                          <span>4.5 / 5.00 User Reviews</span>
                        </div>
                      </div>
                      <div className="title">
                        <span>I Will Design A Post Cards For Your Company</span>
                      </div>
                      <div className="content_footer">
                        <h3>
                          Starting From <span>$20</span>
                        </h3>
                        <div className="content_btn">
                          <a href="#">Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card_item">
                    <div className="content_img">
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                    </div>
                    <div className="content_profile">
                      <img src="images/h22.png" alt="" />
                    </div>
                    <div className="content_text">
                      <div className="content_head">
                        <a href="#">
                          Jullian H{" "}
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </div>
                      <div className="content_middle">
                        <div className="star">
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
                        <div className="review">
                          <span>4.5 / 5.00 User Reviews</span>
                        </div>
                      </div>
                      <div className="title">
                        <span>Design A Corporate Flyer For Your Buainess</span>
                      </div>
                      <div className="content_footer">
                        <h3>
                          Starting From <span>$30</span>
                        </h3>
                        <div className="content_btn">
                          <a href="#">Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card_item">
                    <div className="content_img">
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                      <img src="images/hire2.png" alt="" />
                    </div>
                    <div className="content_profile">
                      <img src="images/h22.png" alt="" />
                    </div>
                    <div className="content_text">
                      <div className="content_head">
                        <a href="#">
                          Jullian H{" "}
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </div>
                      <div className="content_middle">
                        <div className="star">
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
                        <div className="review">
                          <span>4.5 / 5.00 User Reviews</span>
                        </div>
                      </div>
                      <div className="title">
                        <span>Design A Corporate Flyer For Your Buainess</span>
                      </div>
                      <div className="content_footer">
                        <h3>
                          Starting From <span>$30</span>
                        </h3>
                        <div className="content_btn">
                          <a href="#">Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card_item">
                    <div className="content_img">
                      <img src="images/hire3.png" alt="" />
                      <img src="images/hire3.png" alt="" />
                      <img src="images/hire3.png" alt="" />
                      <img src="images/hire3.png" alt="" />
                    </div>
                    <div className="content_profile">
                      <img src="images/h33.png" alt="" />
                    </div>
                    <div className="content_text">
                      <div className="content_head">
                        <a href="#">
                          Petterson S{" "}
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-heart"></i>
                        </a>
                      </div>
                      <div className="content_middle">
                        <div className="star">
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
                        <div className="review">
                          <span>4.5 / 5.00 User Reviews</span>
                        </div>
                      </div>
                      <div className="title">
                        <span>I Will Design A Post Cards For Your Company</span>
                      </div>
                      <div className="content_footer">
                        <h3>
                          Starting From <span>$20</span>
                        </h3>
                        <div className="content_btn">
                          <a href="#">Order Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
