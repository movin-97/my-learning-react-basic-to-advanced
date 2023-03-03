import React from "react";
import HocComponent from "../hoc";

const Card = ({ productsData }) => {
  return (
    <div className="row">
      {productsData.map((item) => {
        return (
          <div class="col-md-3 mt-2">
            <div class="card" style={{ height: "400px" }}>
              <img
                src={item["images"][0]}
                class="card-img-top p-3"
                alt="Hollywood Sign on The Hill"
                height={200}
                width={1000}
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.description.slice(0, 50) + "..."}</p>
              </div>
              <div className="card-footer bg-white ">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="p-2">Rs.{item.price}</h4>
                  <button className="btn btn-outline-info rounded-0">
                    AddToCard
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const HocCard = HocComponent(Card);
export default HocCard;
