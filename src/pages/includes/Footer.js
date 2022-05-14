import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <section>
        <div className="footer">
          <div className="container">
            <div className="footer_wrapper">
              <div className="row">
                <div className="col-lg-5">
                  <div className="footer_left">
                    <h4>Join Our Newsletter</h4>
                    <p>
                      Sign up for our monthly newsletter for the latest Vemlo
                      Downs news, ideas for creation. We combine total coverage
                      with local knowledge
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="footer_right">
                    <div className="search">
                      <form action="#">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Enter Your E-mail Address"
                        />
                        <div className="search_btn">
                          <a href="#">Subscribe Now</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer_content">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <h4>About Us</h4>
                  <p id="company_details">
                    We combine total coverage with local knowledge to offer our
                    clients the most effective signage solutions and Services.
                  </p>
                  <div className="footer_icon">
                    <ul id="footer_socials"></ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <h4>Our Services</h4>
                  <div className="list_item">
                    <ul id="first-services">
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          Printing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          Flyer Design
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          Website Design
                        </a>
                      </li>
                    </ul>
                    <ul id="second-services">
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          Banner Design
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          T-Shirt Printing
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          Web Template
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-angles-right"></i>
                          </span>
                          Business card Design
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <h4>Contact Info</h4>
                  <p>Get in touch with us for your any kind of inquiry</p>
                  <div className="list_item">
                    <ul id="footer-contact">
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-whatsapp"></i>
                          </span>{" "}
                          (+024) 592 71 449
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-envelope-open-text"></i>
                          </span>
                          hello@website.com
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                          St. Here Mandalay, New York, U.K
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bottom">
              <div className="row">
                <div className="col-lg-6">
                  <span id="copyright">2022 iCircle. All Rights Reserved </span>
                </div>
                <div className="col-lg-6 text-end d_m_none">
                  <span>
                    Privacy Policy • Cookie Policy • Terms & Condition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cart">
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel2">
              <img src="images/logo.png" alt="" />
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body"></div>
        </div>
      </section>
    </React.Fragment>
  );
}
