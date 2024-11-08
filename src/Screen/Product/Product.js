import React from "react";
import "./Product.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import products from "./Product.json"
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/actions/cartSlice";
import { toast } from 'react-toastify';

function Product() {
  const dispatch = useDispatch();

  // Function to handle Add to Cart button click
  const handleAddToCart = (item) => {
    console.log("Add to item");
    dispatch(addToCart(item)); 
    toast.success("Added to cart")
  };

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItem">Electronics</div>
        <div className="productTopBannerItemSubMenu">Mobile & Accessories</div>
        <div className="productTopBannerItemSubMenu">Laptop & Accessories</div>
        <div className="productTopBannerItemSubMenu">
          TV & Home Entertainment
        </div>
        <div className="productTopBannerItemSubMenu">Audio</div>
        <div className="productTopBannerItemSubMenu">Cameras</div>
        <div className="productTopBannerItemSubMenu">Smart Technology</div>
        <div className="productTopBannerItemSubMenu">Musical Instruments</div>
        <div className="productTopBannerItemSubMenu">Office & Stationery</div>
      </div>

      <div className="productPageMain">
        <div className="productPageMainLeftCategory">
          <div className="productPageMainLeftCategoryTitle">Category</div>
          <div className="productPageMainLeftCategoryContent">
            <div className="productPageMainLeftCategoryTitleContent">
              Computer & Accessories
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Macbooks
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Average Customer Rating
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="endUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="endUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="endUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#febd69" }}
              />
              <div className="endUp">& Up</div>
            </div>

            <div className="productPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Average Customer Rating
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Average Customer Rating
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Average Customer Rating
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productPageMainLeftCategoryContentSub">
              Average Customer Rating
            </div>
          </div>
        </div>

        <div className="productPageMainRight">
          <div className="productPageMainRightTopBanner">
            1-5 of 5 resultsfor{" "}
            <span className="productPageMainRightTopBannerSpan">Macbooks</span>
          </div>

          <div className="itemImageProductPage">

          {products.product.map((item)=>{
            return (
              <div className="itemImageProductPageOne">
              <div className="imgBlockItemsImageProductPageOne">
                <img
                  src={
                    item.imageUrl
                  }
                  alt=""
                  className="productImageProduct"
                />
              </div>

              <div className="productNameProduct">
                <div>
                  {
                    item.name
                  }
                </div>

                <div className="productNameProductRating">
                  <StarOutlinedIcon
                    sx={{ fontSize: "16px", color: "#febd69" }}
                  />
                  <StarOutlinedIcon
                    sx={{ fontSize: "16px", color: "#febd69" }}
                  />
                  <StarOutlinedIcon
                    sx={{ fontSize: "16px", color: "#febd69" }}
                  />
                  <StarOutlinedIcon
                    sx={{ fontSize: "16px", color: "#febd69" }}
                  />
                  <StarOutlinedIcon
                    sx={{ fontSize: "16px", color: "#febd69" }}
                  />
                  <StarOutlineOutlinedIcon
                    sx={{ fontSize: "16px", color: "#febd69" }}
                  />
                </div>

                <div className="priceProductDetailPage">
                  <div className="currencyText">₹</div>
                  <div className="rateHomeDetail">
                  <div className="rateHomeDetailPrice">{item.price}</div>
                  {/* <div className="addToBasketBtn" >Add To Cart</div> */}
                  <button
                        className="addToBasketBtn"
                        onClick={() => handleAddToCart(item)} 
                      >
                        Add To Cart
                      </button>
                  </div>
                </div>
                  <div className="offProductPage">Upto 10% Off on select cards</div>
                  <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
              </div>
            </div>
            )
          })}

          </div>


        </div>
      </div>
    </div>
  );
}

export default Product;
