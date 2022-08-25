import React from "react";
import { connect } from "react-redux";
import { useDispatch} from 'react-redux'

import { addToCart, add, subtract } from "../actions/action";

//aqui tenemos los dispatch
export function ItemList(props)  {
const dispatch = useDispatch();

  function faddToCart (e, itemname) {
    //lo envia al reducer, necesitamos un estado y una accion
    dispatch(addToCart(itemname));
  }

  function fadd  (e, itemname)  {
    dispatch(add(itemname));
  };

  function fsubtract  (e, itemname) {
    dispatch(subtract(itemname));
  };

  let itemList=[];
    itemList= props.item.map((i, j) => {
      return (
        <div className="col-xs-4 col-md-3" data-cart-product key={j}>
          <div className="thumbnail">
            <div className="caption">
              <h3>{i.itemname}</h3>
              <p>{i.price}</p>
              {!i.cartCount ? (
                <button onClick={e => faddToCart(e, i.itemname)}>
                  Add to cart
                </button>
              ) : (
                <div className="number">
                  <button onClick={e => fsubtract(e, i.itemname)}>-</button>
                  <button>{i.cartCount}</button>
                  <button onClick={e => fadd(e, i.itemname)}>+</button>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    })
    return (<div>{itemList}</div>);
  
}

const mapStateToProps = state => ({
  item: state.products.item,
  cart: state.products.cart,
  total: state.products.total
});

export default connect(mapStateToProps)(ItemList);
