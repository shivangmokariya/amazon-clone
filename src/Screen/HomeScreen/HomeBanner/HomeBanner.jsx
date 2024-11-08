// import React from "react";
// import "./HomeBanner.css";
// import homeBannerProduct from "../../../HomeProduct.json"

// function HomeBanner() {
//   return (
//     <div className="homeBanner">
//       <img
//         className="homeBannerimg"
//         src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
//         alt=""
//       />
//       <div className="grayBackgroundHomeBanner"></div>

//       <div className="homeBannerItemDiv">
//         {homeBannerProduct.product.map((item,index)=>{
//           return(

//             <div className="homeBannerItemDivCard">
//             <div className="homeBannerItemDivCardTitle">{item.name}</div>

//             <div className="imgHomeBannerItemDivCard">
//               {}
//               <div className="imgBannerHomeDiv">
//                 <img
//                   src={item.imageUrl}
//                   alt=""
//                   className="imgBannerHomeDivImg"
//                 />
//                 <div className="imgBannerImgName">Air conditioner</div>
//               </div>

//               <div className="imgBannerHomeDiv">
//                 <img
//                   src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
//                   alt=""
//                   className="imgBannerHomeDivImg"
//                 />
//                 <div className="imgBannerImgName">Refrigerators</div>
//               </div>

//               <div className="imgBannerHomeDiv">
//                 <img
//                   src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
//                   alt=""
//                   className="imgBannerHomeDivImg"
//                 />
//                 <div className="imgBannerImgName">Microwaves</div>
//               </div>

//               <div className="imgBannerHomeDiv">
//                 <img
//                   src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
//                   alt=""
//                   className="imgBannerHomeDivImg"
//                 />
//                 <div className="imgBannerImgName">Washing machines</div>
//               </div>

//             </div>

//             <div className="seeMoreHomeBanner">See More</div>
//           </div>

//           );
//         })}

//         {/* <div className="homeBannerItemDivCard">
//           <div className="homeBannerItemDivCardTitle">Title</div>

//           <div className="imgHomeBannerItemDivCard">
//             <div className="imgBannerHomeDiv">
//               <img
//                 src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
//                 alt=""
//                 className="imgBannerHomeDivImg"
//               />
//               <div className="imgBannerImgName">Air conditioner</div>
//             </div>

//             <div className="imgBannerHomeDiv">
//               <img
//                 src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
//                 alt=""
//                 className="imgBannerHomeDivImg"
//               />
//               <div className="imgBannerImgName">Refrigerators</div>
//             </div>

//             <div className="imgBannerHomeDiv">
//               <img
//                 src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
//                 alt=""
//                 className="imgBannerHomeDivImg"
//               />
//               <div className="imgBannerImgName">Microwaves</div>
//             </div>

//             <div className="imgBannerHomeDiv">
//               <img
//                 src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
//                 alt=""
//                 className="imgBannerHomeDivImg"
//               />
//               <div className="imgBannerImgName">Washing machines</div>
//             </div>
//           </div>

//           <div className="seeMoreHomeBanner">See More</div>
//         </div> */}

//       </div>
//     </div>
//   );
// }

// export default HomeBanner;

import React from "react";
import "./HomeBanner.css";
import homeBannerItemProduct from "../../../HomeProduct.json";
const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
      />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">
        {homeBannerItemProduct.product.map((item, ind) => {
          return (
            <div className="homeBannerItemDivCard">
              <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
              <div className="imgHomeBannerItemDivCard">
                {item.imgs.map((item, ind) => {
                  return (
                    <div className="imgBannerHomeDiv">
                      <img className="imgBannerHomeDivImg" src={item} />
                      <div className="imgBannerImgName">
                        boAt Stone 1800 Bluet
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="seeMoreHomeBanner">See More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBanner;
