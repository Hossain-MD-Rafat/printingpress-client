import React from "react";

export default function () {
  return (
    <React.Fragment>
      <header>
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="header_top_left">
                  <div className="header_item">
                    <a href="#">
                      <span>
                        <i className="fa-brands fa-whatsapp"></i>
                      </span>{" "}
                      <span id="entity_phone"></span>
                    </a>
                    <a href="#">
                      <span>
                        <i className="fa-solid fa-envelope-open-text"></i>
                      </span>{" "}
                      <span id="entity_email"></span>
                    </a>
                    <a href="#">
                      <span>
                        <i className="fa-solid fa-location-dot"></i>
                      </span>{" "}
                      <span id="entity_address"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="header_top_right text-end">
                  <div className="state">
                    <a href="#">
                      <img src="images/flag.png" alt="" />
                      United State
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="header_left">
                  <div className="logo w-30">
                    <img className="w-50" src="images/logo.png" alt="" />
                  </div>
                  <div className="search w-60">
                    <form action="#">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Search Products"
                      />
                      <label>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="header_right text-end align-items-center">
                  <a
                    href="#"
                    className="join"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop2"
                  >
                    {" "}
                    Sign In
                    <span className="d_m_none">
                      <i className="fa-solid fa-user"></i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d_m_none"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    {" "}
                    Cart{" "}
                    <span>
                      <i className="fa-solid fa-bag-shopping"></i>
                    </span>
                  </a>
                  <a
                    href="#"
                    className="d-block d-lg-none nav_toggol"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight2"
                    aria-controls="offcanvasRight2"
                  >
                    {" "}
                    <i className="fa-solid fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="navbar_toggoler">
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight2"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel"></h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="nav_list">
                <div className="cart_box">
                  <a
                    href="#"
                    className="d_m_none"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    {" "}
                    Cart{" "}
                    <span>
                      <i className="fa-solid fa-bag-shopping"></i>
                    </span>
                  </a>
                </div>
                <div className="dropdown">
                  <a href="#" className="js-link">
                    Featured<i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="js-dropdown-list" id="nav-menu-mobile"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav>
        <div className="nav d-lg-block d-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul id="nav-menu"></ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
