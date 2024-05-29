import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../context/slice/wishlistSlice";

const Wishlist = () => {
  //   const wishlist = useSelector((state) => state.wishlist);
  //   const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {/* {wishlist.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch(removeFromWishlist(item.id))}>
              Remove
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Wishlist;
