import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./includes/Footer";
import Header from "./includes/Header";

export default function Category() {
  const [data, setData] = useState([]);
  const {ms_id, c_id} = useParams();

  const loadData = () => {
    fetch(`https://icircles.app/api/printingpress/category/${ms_id}/${c_id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <section>
        <div className="hire">
          <div className="container">
            <div className="row">
              {data.featured_products &&
                data.products.map((pd) => {
                  let sell_price = -1;
                  if (pd.discount_type == 1) {
                    sell_price = pd.price - pd.discount;
                    if (sell_price < 0) sell_price = 0;
                  }
                  if (pd.discount_type == 2) {
                    sell_price = pd.price - (pd.price * pd.discount) / 100;
                    if (sell_price < 0) sell_price = 0;
                  }
                  const images = pd.images.split(";");
                  return (
                    <div className="col-lg-4">
                      <div className="card_item">
                        <div className="content_img">
                          {images.map((image) => {
                            return (
                              <img
                                src={`https://icircles.app/uploads/rfq/${pd.microsite_id}/${image}`}
                                alt=""
                              />
                            );
                          })}
                        </div>

                        <div className="content_text">
                          <div className="title">
                            <span>{pd.name}</span>
                          </div>
                          <div className="content_footer">
                            <div className="content_btn">
                              <span
                                className={
                                  sell_price > -1
                                    ? "line-through pd-price"
                                    : "pd-price"
                                }
                              >
                                ${pd.price}
                              </span>
                              {sell_price > -1 && (
                                <span className="pd-price">${sell_price}</span>
                              )}
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
      </section>
      <Footer />
    </div>
  );
}
