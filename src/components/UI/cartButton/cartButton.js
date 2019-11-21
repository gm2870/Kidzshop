import React from "react";

const cartButton = props => {
    return (
        <button
            onClick={props.clicked}
            className="btn btn--main addToCart__btn"
        >
            {props.isAdded ? "ورود و ثبت سفارش" : "افزودن به سبد خرید"}
        </button>
    );
};
export default cartButton;
