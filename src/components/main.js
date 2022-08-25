import React from "react";
import { useEffect } from "react";
import { useDispatch} from 'react-redux'
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import ItemList from "./itemList.js";
import CartList from "./cartList.js";
import Total from "./total.js";

import { fetchProducts } from "../store/actions/fetchData";
import store from "../store/store.js";

export function Main () {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  console.log(store.getState());

  
    return (
      <div>
        <ItemList />
        <hr />
        <CartList />
        <hr />
        <Total />
      </div>
    )
  }


const mapStateToProps = state => ({
  item: state.products.item,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Main);
