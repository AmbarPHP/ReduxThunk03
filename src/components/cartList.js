import React from "react";
import { connect } from "react-redux";
import { useDispatch} from 'react-redux'

//lo publicaron aqui
//https://codesandbox.io/s/react-redux-fetch-data-from-api-c5ml1?file=/src/components/cartList.js:1064-1068
import { add, subtract, removeItemFromCart } from "../store/actions/action";

export function CartList (props) {

  const dispatch = useDispatch();

  const fadd = (e, itemname) => {
    dispatch(add(itemname));
  };

  const fsubtract = (e, itemname) => {
    dispatch(subtract(itemname));
  };

  const fremoveItemFromCart = (e, itemname, amount) => {
    console.log("amount", amount);
    dispatch(removeItemFromCart(itemname, amount));
  };

  let cartList=[];

  cartList = props.cart.map((i, j) => {
    return (
      <div className="col-xs-4 col-md-3" data-cart-product key={j}>
        <div className="thumbnail">
          <div className="caption">
            <h3>{i.itemname}</h3>
            <p>
              {i.price}*{i.cartCount}={i.price * i.cartCount}
            </p>
            <div className="number">
              <button onClick={e => fsubtract(e, i.itemname)}>-</button>
              <button>{i.cartCount}</button>
              <button onClick={e => fadd(e, i.itemname)}>+</button>
              <br />
              <button
                onClick={e =>
                  fremoveItemFromCart(e, i.itemname, i.price * i.cartCount)
                }
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  })
  return <div>{cartList}</div>;
  
}

const mapStateToProps = state => ({
  item: state.products.item,
  cart: state.products.cart,
  total: state.products.total
});

export default connect(mapStateToProps)(CartList);
