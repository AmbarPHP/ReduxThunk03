import React from "react";
import { connect } from "react-redux";

export function Total (props) {
  return(
    
    <div>Total: {props.total}</div>
  );
}

const mapStateToProps = state => ({
  total: state.products.total
});

export default connect(mapStateToProps)(Total);