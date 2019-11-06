import React , {useEffect} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import {Link} from 'react-router-dom';
const breadcrumb = props => {
    return (
        <Auxiliary>
            <nav className="breadcrumb">
                <Link to="/">خانه</Link>
                <span className="breadcrumb__separator"> / </span>
                <Link to="/">
                    {props.product.category_name}
                </Link>
                <span className="breadcrumb__separator"> / </span>
                {props.product.name}
            </nav>
        </Auxiliary>
    );
}
export default breadcrumb;