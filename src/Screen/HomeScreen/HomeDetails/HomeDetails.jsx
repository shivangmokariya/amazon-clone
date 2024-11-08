import React from "react";
import "./HomeDetails.css";

// Dynamic JSON data (import or fetch from an API)
import dealsData from "./dealsData.json";

function HomeDetails() {
  return (
    <div className="homeDetails">
      {dealsData.deals.map((deal, index) => (
        <div key={index} className="homeDetailLongCard">
          <div className="homeDetailLongCardTitle">{deal.title}</div>
          <div className="homeDetailLongCardItems">
            <div className="scrollDiv">
              {deal.items.map((item, itemIndex) => (
                <div key={itemIndex} className="homeDetailLongCardItem">  
                  <img
                    className="homeDetailLongCardItemImg"
                    src={item.imageUrl}
                    alt={item.description}
                  />
                  <div className="homeDetailLongCardItemImgDetail">
                    <div className="homeDetailLongCardItemImgTopDetail">
                      <div className="homeDetailsPercentageOff">{item.discount}</div>
                      <div className="limitedTimeDealHomeDetail">{item.dealType}</div>
                    </div>
                    <div className="bottomHomeDetail">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeDetails;
