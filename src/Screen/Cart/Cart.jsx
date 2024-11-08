// import React, { Component } from 'react'
// import './Cart.css'
// export class Cart extends Component {
//   render() {
//     return (
//       <div className='cart'>
//         <div className="topLeftCart">
//             <div className="topLeftCartTitle">
//                 Shopping Cart
//             </div>
//             <div className="deSelectAllCart">
//                 Deselect all items
//             </div>
//             <div className="cartPriceTextDevider">
//                 Price
//             </div>

//             <div className="cartItemsDiv">
//                 <div className="cartItemBlock">
//                     <div className="cartItemLeftBlock">
//                         <div className="cartItemLeftBlockImage">
//                             <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UL480_FMwebp_QL65_.jpg" alt="" className="cartItemLeftBlockImg" />
//                         </div>
//                         <div className="cartItemLeftBlockDetails">
//                             <div className="cartItemProductName">Canon EOS 200D II DSLR Camera with EF-S 18-55mm IS STM Lens, 24.1 MP, Wi-Fi, Bluetooth, Full HD Apple MacBook Pro 16-inch, M2 Pro Chip, 16GB RAM, 512GB SSD, Space Gray</div>
//                             <div className="inStockCart">In stock</div>
//                             <div className="elgFreeDelivery">Eligible For Free Delivery</div>
//                             <div className="amazonFullFilledImage"><img className='fullFilling' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></div>
//                             <div className="removeFromCart">Remove From Basket</div>
//                         </div>
//                     </div>
//                     <div className="cartItemRightBlock">
//                         Rs {"25,000"}
//                     </div>
//                 </div>
//             </div>

//             <div className="cartItemsDiv">
//                 <div className="cartItemBlock">
//                     <div className="cartItemLeftBlock">
//                         <div className="cartItemLeftBlockImage">
//                             <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UL480_FMwebp_QL65_.jpg" alt="" className="cartItemLeftBlockImg" />
//                         </div>
//                         <div className="cartItemLeftBlockDetails">
//                             <div className="cartItemProductName">Canon EOS 200D II DSLR Camera with EF-S 18-55mm IS STM Lens, 24.1 MP, Wi-Fi, Bluetooth, Full HD Apple MacBook Pro 16-inch, M2 Pro Chip, 16GB RAM, 512GB SSD, Space Gray</div>
//                             <div className="inStockCart">In stock</div>
//                             <div className="elgFreeDelivery">Eligible For Free Delivery</div>
//                             <div className="amazonFullFilledImage"><img className='fullFilling' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></div>
//                             <div className="removeFromCart">Remove From Basket</div>
//                         </div>
//                     </div>
//                     <div className="cartItemRightBlock">
//                         Rs {"25,000"}
//                     </div>
//                 </div>
//             </div>

//         </div>
//         <div className="topRightCard">
//             <div className="subTotalTitle">Subtotal ({2} Items): <span className='subTotalTitleSpan'>Rs {45000}</span> </div>
//             <div className="gitAddTo">
//                 <input type="checkbox" className="checkbox" />
//                 <div>This Order Contains gift</div>
//             </div>
//             <div className="proceedToBuy">Proceed To Buy</div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Cart

import React, { useCallback, useEffect } from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart,clearCart } from '../../Redux/actions/cartSlice';
import { toast } from 'react-toastify';
import {CLEAR_CART,REMOVE_FROM_CART} from '../../Redux/actionsType'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback((itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
    dispatch(removeFromCart(itemId));
    toast.success("Item removed from cart")
  });

  const handleClearCart = () => {
    dispatch({ type: CLEAR_CART });
    dispatch(clearCart());
    toast.success("Cart cleared")
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  useEffect(()=>{

  },[handleRemoveFromCart])

  return (
    <div className='cart'>
      <div className="topLeftCart">
        <div className="topLeftCartTitle">
          Shopping Cart
        </div>
        {cartItems.length !== 0 && 
        <div className="deSelectAllCart" onClick={handleClearCart}>
        Deselect all items
      </div>}
        <div className="cartPriceTextDevider">
          Price
        </div>

        <div className="cartItemsDiv">
          {cartItems.map((item) => (
            <div className="cartItemBlock" key={item.id}>
              <div className="cartItemLeftBlock">
                <div className="cartItemLeftBlockImage">
                  <img src={item.imageUrl} alt={item.name} className="cartItemLeftBlockImg" />
                </div>
                <div className="cartItemLeftBlockDetails">
                  <div className="cartItemProductName">{item.name}</div>
                  <div className="inStockCart">In stock</div>
                  <div className="elgFreeDelivery">Eligible For Free Delivery</div>
                  <div className="amazonFullFilledImage">
                    <img className='fullFilling' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" />
                  </div>
                  <div className="removeFromCart" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove From Basket 
                  </div>
                  <div className="quantity">Quantity - {item?.quantity || 1}</div>
                </div>
              </div>
              <div className="cartItemRightBlock">
                Rs {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="topRightCard">
        <div className="subTotalTitle">
          Subtotal ({cartItems.length} Items): <span className='subTotalTitleSpan'>Rs {calculateTotal()}</span>
        </div>
        <div className="gitAddTo">
          <input type="checkbox" className="checkbox" />
          <div>This Order Contains a gift</div>
        </div>
        <div className="proceedToBuy">Proceed To Buy</div>
      </div>
    </div>
  );
};

export default Cart;
